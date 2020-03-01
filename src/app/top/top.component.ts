import { Component, OnInit } from '@angular/core';
import { Article } from 'app/shared/models/article';
import { ArticleService } from 'app/shared/services/article.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
    articleList$: Observable<Article[]>;

    constructor(private articleService: ArticleService) {}

    ngOnInit() {
        this.articleList$ = this.articleService.getAll();
    }
}
