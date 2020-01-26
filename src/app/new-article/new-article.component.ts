import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  /**
   * 申請ボタン押下時処理
   */
  submit() {
    console.log(this.form.getRawValue());
  }

  /**
   * 保存ボタン押下時処理
   */
  save() {
    console.log(this.form.getRawValue());
    console.log('save');
  }

  /**
   * キャンセルボタン押下時処理
   */
  cancel() {
    console.log('cancel');
  }
}
