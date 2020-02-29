import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleService } from 'app/shared/services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnInit {
  article$: Observable<Article>;

  constructor(private article: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: number = Number(params.id);
      this.article$ = this.article.get(id);
     });
  }

  publish() {
    console.log('publish');
  }

}
