import { Component, OnInit } from '@angular/core';
import { Article } from 'app/models/article';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  articleList: Article[];

  constructor() { }

  ngOnInit() {
    this.articleList = [
      new Article('おはよう', 'Good Morning!', 'A先生'),
      new Article('こんにちは', 'Good Afternoon!', 'B先生')
    ];
  }

}
