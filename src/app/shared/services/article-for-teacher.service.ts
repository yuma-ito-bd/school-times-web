import { Injectable } from '@angular/core';
import { Article, ARTICLE_STATUS } from 'app/shared/models/article';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateArticleRequest, CreateArticleResponse } from '../interfaces/create-article';
import { GetArticleResponse } from '../interfaces/get-article';
import { HttpClientService } from './core/http-client.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleForTeacherService {
    articleList: Article[];

    constructor(private httpClient: HttpClientService, private user: UserService) {}

    /**
     * 学級だよりを1件取得する
     * @param id 学級だよりのID
     */
    get(id: number): Observable<Article> {
        console.log(`AritcleService get [id: ${id}]`);
        if (this.articleList) {
            return of(this.articleList.find(article => article.id === id));
        }

        return this.getAll().pipe(
            map(data => {
                this.articleList = data;
                return data.find(article => article.id === id);
            })
        );
    }

    /**
     * すべての学級だよりを取得する
     */
    getAll(): Observable<Article[]> {
        console.log(`AritcleService getAll`);
        const authorId = this.user.id;
        return this.httpClient
            .get<GetArticleResponse>('articles', { authorId: authorId.toString() })
            .pipe(
                map(({ articles }) => {
                    this.articleList = articles.map(data => new Article(data));
                    return this.articleList;
                })
            );
    }

    /**
     * 学級だより（下書き）を作成する
     * @param title タイトル
     * @param contents 本文
     */
    async createDraft(title: string, contents: string): Promise<void> {
        const data: CreateArticleRequest = {
            title,
            contents,
            status: ARTICLE_STATUS.DRAFT,
            authorId: this.user.id,
        };
        console.log(`AritcleService createDraft [${JSON.stringify(data)}]`);
        const result = await this.httpClient
            .post<CreateArticleResponse>('articles', data)
            .toPromise();
        console.log(`create success [data: ${JSON.stringify(result)}]`);
    }

    /**
     * 学級だより（申請対象）を作成する
     * @param title タイトル
     * @param contents 本文
     */
    async createPublishment(title: string, contents: string): Promise<void> {
        const data: CreateArticleRequest = {
            title,
            contents,
            status: ARTICLE_STATUS.UNPUBLISHED,
            authorId: this.user.id,
        };
        console.log(`AritcleService createPublishment [${JSON.stringify(data)}]`);
        const result = await this.httpClient
            .post<CreateArticleResponse>('articles', data)
            .toPromise();
        console.log(`create success [data: ${JSON.stringify(result)}]`);
    }

    /**
     * 学級だよりを更新する
     * @param updatedArticle 更新する学級だより
     */
    update(updatedArticle: Article): void {
        console.log(`AritcleService update [id: ${updatedArticle.id}]`);
        // TODO: httpを呼ぶ
        console.dir(updatedArticle);
        const index = this.articleList.findIndex(article => article.id === updatedArticle.id);
        this.articleList[index] = updatedArticle;
    }

    /**
     * 学級だよりを削除する
     * @param id 削除する学級だよりのID
     */
    delete(id: number): void {
        console.log(`AritcleService delete [id: ${id}]`);
        // TODO: httpサービスを呼ぶ
        console.log(`delete id: ${id}`);
        this.articleList = this.articleList.filter(article => article.id !== id);
    }
}
