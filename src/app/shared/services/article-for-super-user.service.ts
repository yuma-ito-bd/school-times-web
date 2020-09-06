import { Injectable } from '@angular/core';
import { HttpClientService } from './core/http-client.service';

@Injectable({
    providedIn: 'root',
})
export class ArticleForSuperUserService {
    constructor(private http: HttpClientService) {}

    /**
     * 指定した学級だよりを公開する
     * @param articleId 公開する学級だよりのID
     */
    async publish(articleId: number): Promise<void> {
        console.log(`ArticleForSuperUserService publish the article`, { articleId });
        await this.http.post(`articles/publish/${articleId}`).toPromise();
    }
}
