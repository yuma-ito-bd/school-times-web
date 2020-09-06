import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleForTeacherService } from 'app/shared/services/article-for-teacher.service';

@Component({
    selector: 'app-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
    article: Article;
    titleForm: FormControl;
    contentsForm: FormControl;
    formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private articleService: ArticleForTeacherService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.initializeForm();
        // パスパラメータのidから学級だよりの情報を取得し、フォームにセットする
        this.activatedRoute.params.subscribe(async params => {
            const id = Number(params.id);
            this.article = await this.articleService.get(id).toPromise();
            this.setValueToForm(this.article);
        });
    }

    /**
     * フォームの初期化を行う
     */
    private initializeForm(): void {
        this.titleForm = this.formBuilder.control('', [
            Validators.required,
            Validators.maxLength(30),
        ]);
        this.contentsForm = this.formBuilder.control('', [
            Validators.required,
            Validators.maxLength(1200),
        ]);
        this.formGroup = this.formBuilder.group({
            title: this.titleForm,
            contents: this.contentsForm,
        });
    }

    /**
     * 編集対象の学級だよりの情報をフォームにセットする
     * @params 学級だより
     */
    private setValueToForm({ title, contents }: Article) {
        this.titleForm.setValue(title);
        this.contentsForm.setValue(contents);
    }

    /**
     * 更新ボタン押下時処理
     * 学級だよりの更新処理を行う
     */
    async submit() {
        console.log(this.formGroup.value);
        const newArticle = new Article({ ...this.article, ...this.formGroup.value });
        await this.articleService.update(newArticle);
        this.router.navigate(['./top']);
    }

    /**
     * キャンセルボタン押下時処理
     */
    cancel() {
        console.log('cancel');
        this.router.navigate(['../../top'], { relativeTo: this.activatedRoute });
    }
}
