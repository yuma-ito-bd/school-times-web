import { Component, OnInit } from '@angular/core';
import { Article } from 'app/shared/models/article';
import { ArticleService } from 'app/shared/services/article.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent implements OnInit {
  article: Article;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    // TODO: pathParameterでid指定
    this.article = this.articleService.get(0);
  }

}
