import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetArticleResponse } from '../interfaces/get-article';
import { Article } from '../models/article';
import { HttpClientService } from './core/http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    articleList: Article[];
    constructor(private http: HttpClientService) {}

    /**
     * 公開済みのすべての学級だよりを取得する
     */
    getAllPublishedArticles(): Observable<Article[]> {
        console.log(`公開済みの学級だよりを取得します`);
        return (
            this.http
                // TODO classIdの取得
                .get<GetArticleResponse>('articles/published', { classId: '1' })
                .pipe(
                    map(({ articles }) => {
                        this.articleList = articles.map(data => new Article(data));
                        return this.articleList;
                    })
                )
        );
    }
}
