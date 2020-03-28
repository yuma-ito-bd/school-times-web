import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleForSuperUserService } from 'app/shared/services/article-for-super-user.service';
import { ArticleForTeacherService } from 'app/shared/services/article-for-teacher.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-admin-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
    article$: Observable<Article>;
    private id: number;
    private article: Article;

    constructor(
        private articleService: ArticleForTeacherService,
        private route: ActivatedRoute,
        private router: Router,
        private articleForSuperUser: ArticleForSuperUserService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = Number(params.id);
            this.article$ = this.articleService
                .get(this.id)
                .pipe(tap(data => (this.article = new Article(data))));
        });
    }

    async publish() {
        await this.articleForSuperUser.publish(this.article);
        this.router.navigate(['admin/top']).then();
    }
}
