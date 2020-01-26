import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Article } from 'app/shared/models/article';
import { ArticleService } from 'app/shared/services/article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  article: Article;

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

  ngOnInit() {
    // TODO: パスパラメータからID取得
    this.article = this.articleService.get(0);
    this.titleForm.setValue(this.article.title);
    this.contentsForm.setValue(this.article.contents);
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
