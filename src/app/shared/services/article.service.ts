import { Injectable } from '@angular/core';
import { Article } from 'app/shared/models/article';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleList: Article[];

  constructor(private httpClient: HttpClientService) {}

  /**
   * 学級だよりを1件取得する
   * @param id 学級だよりのID
   */
  get(id: number): Observable<Article> {
    console.log(`AritcleService get [id: ${id}]`);
    if (this.articleList) {
      return of(this.articleList.find((article) => article.id === id));
    }

    return this.getAll().pipe(map((data) => {
        this.articleList = data;
        return data.find(article => article.id === id);
    }));

  }

  /**
   * すべての学級だよりを取得する
   */
  getAll(): Observable<Article[]> {
    console.log(`AritcleService getAll`);
    if (this.articleList) {
      return of(this.articleList);
    }

    return this.httpClient.get<Article[]>('api/articles').pipe(
      map(data => {
        this.articleList = data;
        return data;
      })
    );
  }

  /**
   * 学級だよりを作成する
   * @param article 学級だより
   */
  async create(article: Article): Promise<void> {
    console.log(`AritcleService create [title: ${article.title}]`);
    const result = await this.httpClient.post<Article>('api/articles', article).toPromise();
    article.id = result.id;
    if (!this.articleList) {
      await this.getAll().toPromise();
    }
    this.articleList.unshift(article);
  }

  /**
   * 学級だよりを更新する
   * @param updatedArticle 更新する学級だより
   */
  update(updatedArticle: Article): void {
    console.log(`AritcleService update [id: ${updatedArticle.id}]`);
    // TODO: httpを呼ぶ
    console.dir(updatedArticle);
    const index = this.articleList.findIndex((article) => article.id === updatedArticle.id);
    this.articleList[index] = updatedArticle;
  }

  /**
   * 学級だよりを削除する
   * @param id 削除する学級だよりのID
   */
  delete(id: number ): void {
    console.log(`AritcleService delete [id: ${id}]`);
    // TODO: httpサービスを呼ぶ
    console.log(`delete id: ${id}`);
    this.articleList = this.articleList.filter((article) => article.id !== id);
  }
}

