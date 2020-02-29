import { Component, Input } from '@angular/core';
import { Article } from 'app/shared/models/article';

@Component({
  selector: 'app-article-card-for-admin',
  templateUrl: './article-card-for-admin.component.html',
  styleUrls: ['./article-card-for-admin.component.scss']
})
export class ArticleCardForAdminComponent {
  @Input() article: Article;

  statusMessage = {
    '=0': '下書き',
    '=1': '公開申請済',
    '=2': '公開中'
  };

  constructor() { }

}
