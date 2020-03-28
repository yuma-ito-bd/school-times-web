import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleForTeacherService } from 'app/shared/services/article-for-teacher.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-view-article',
    templateUrl: './view-article.component.html',
    styleUrls: ['./view-article.component.scss'],
})
export class ViewArticleComponent implements OnInit {
    article$: Observable<Article>;

    constructor(private articleService: ArticleForTeacherService, private router: ActivatedRoute) {}

    ngOnInit() {
        this.router.params.subscribe(params => {
            const id: number = Number(params.id);
            this.article$ = this.articleService.get(id);
        });
    }
}
