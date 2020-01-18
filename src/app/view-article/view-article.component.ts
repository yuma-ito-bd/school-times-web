import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  title: string;
  contents: string;
  author: string;
  createAt: Date;


  constructor() { }

  ngOnInit() {
    this.title = '新年が始まりました';
    this.contents = '明けましておめでとうございます。';
    this.author = 'Yoda';
    this.createAt = new Date();
  }

}
