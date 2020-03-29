import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleForTeacherService } from 'app/shared/services/article-for-teacher.service';

@Component({
    selector: 'app-new-article',
    templateUrl: './new-article.component.html',
    styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent {
    titleForm = new FormControl('', [Validators.maxLength(30)]);

    contentsForm = new FormControl('', [Validators.maxLength(1200)]);

    form = this.formBuilder.group({
        title: this.titleForm,
        contents: this.contentsForm,
    });

    constructor(
        private formBuilder: FormBuilder,
        private article: ArticleForTeacherService,
        private route: Router
    ) {}

    /**
     * 申請ボタン押下時処理
     */
    async submit() {
        console.log('submit');
        const title = this.titleForm.value;
        const contents = this.contentsForm.value;
        await this.article.createPublishment(title, contents);
        this.route.navigate(['/admin/top']);
    }

    /**
     * 保存ボタン押下時処理
     */
    async save() {
        console.log('save');
        const title = this.titleForm.value;
        const contents = this.contentsForm.value;
        await this.article.createDraft(title, contents);
        this.route.navigate(['/admin/top']);
    }

    /**
     * キャンセルボタン押下時処理
     */
    cancel() {
        console.log('cancel');
        this.route.navigate(['/admin/top']);
    }
}
