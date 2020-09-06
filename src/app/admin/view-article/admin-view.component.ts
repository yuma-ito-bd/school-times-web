import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'app/shared/models/article';
import { ArticleForSuperUserService } from 'app/shared/services/article-for-super-user.service';
import { ArticleForTeacherService } from 'app/shared/services/article-for-teacher.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
    article$: Observable<Article>;
    private id: number;

    constructor(
        private articleService: ArticleForTeacherService,
        private route: ActivatedRoute,
        private router: Router,
        private articleForSuperUser: ArticleForSuperUserService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = Number(params.id);
            this.article$ = this.articleService.get(this.id);
        });
    }

    /**
     * 学級だよりの公開許可をする
     */
    async publish() {
        await this.articleForSuperUser.publish(this.id);
        this.router.navigate(['admin/top']).then();
    }
}
