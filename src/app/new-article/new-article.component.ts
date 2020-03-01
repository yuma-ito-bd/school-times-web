import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleService } from 'app/shared/services/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {

  titleForm = new FormControl('', [
    Validators.maxLength(30)
  ]);

  contentsForm = new FormControl('', [
    Validators.maxLength(1200)
  ]);

  form = this.formBuilder.group({
    title: this.titleForm,
    contents: this.contentsForm
  });

  constructor(private formBuilder: FormBuilder, private article: ArticleService, private route: Router) { }

  /**
   * 申請ボタン押下時処理
   */
  async submit() {
    console.log('submit');
    const article = new Article(this.titleForm.value, this.contentsForm.value, 'A先生');
    await this.article.requestPublishment(article);
    this.route.navigate(['/admin/top']);
  }

  /**
   * 保存ボタン押下時処理
   */
  async save() {
    console.log('save');
    const article = new Article(this.titleForm.value, this.contentsForm.value, 'A先生');
    await this.article.create(article);
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
