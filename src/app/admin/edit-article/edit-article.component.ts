import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

    titleForm = new FormControl('', [Validators.maxLength(30)]);

    contentsForm = new FormControl('', [Validators.maxLength(1200)]);

    form = this.formBuilder.group({
        title: this.titleForm,
        contents: this.contentsForm,
    });

    constructor(
        private formBuilder: FormBuilder,
        private articleService: ArticleForTeacherService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe(async params => {
            const id = Number(params.id);
            this.article = await this.articleService.get(id).toPromise();
        });
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
