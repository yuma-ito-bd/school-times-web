import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) { }

  /**
   * 申請ボタン押下時処理
   */
  submit() {
    console.log(this.form.getRawValue());
    const article = new Article(this.titleForm.value, this.contentsForm.value, 'A先生');
    this.articleService.create(article);
  }

  /**
   * 保存ボタン押下時処理
   */
  save() {
    console.log('save');
    console.log(this.form.getRawValue());
    const article = new Article(this.titleForm.value, this.contentsForm.value, 'A先生');
    this.articleService.create(article);
  }

  /**
   * キャンセルボタン押下時処理
   */
  cancel() {
    console.log('cancel');
  }
}
