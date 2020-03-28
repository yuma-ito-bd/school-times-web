import { Injectable } from '@angular/core';
import { UpdateArticleRequest, UpdateArticleResponse } from '../interfaces/UpdateArticle';
import { Article, STATUS } from '../models/article';
import { HttpClientService } from './core/http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleForSuperUserService {
    constructor(private http: HttpClientService) {}

    /**
     * 指定した学級だよりを公開する
     * @param article 公開する学級だより
     */
    async publish(article: Article): Promise<void> {
        console.log(`ArticleForSuperUserService publish [${JSON.stringify(article)}]`);
        article.status = STATUS.PUBLISHED;

        const path = `articles/${article.id}`;
        const body: UpdateArticleRequest = new Article(article);
        const response = await this.http.put<UpdateArticleResponse>(path, body).toPromise();
        console.log(`学級だよりの公開が成功しました [id: ${response.id}] `);
    }
}
