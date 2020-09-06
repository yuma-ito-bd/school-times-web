import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.initializeForm();
        // パスパラメータのidから学級だよりの情報を取得し、フォームにセットする
        this.route.params.subscribe(async params => {
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
     */
    submit() {
        console.log(this.form.getRawValue());
        this.article.title = this.titleForm.value;
        this.article.contents = this.contentsForm.value;

        this.articleService.update(this.article);
    }

    /**
     * キャンセルボタン押下時処理
     */
    cancel() {
        console.log('cancel');
    }
}
