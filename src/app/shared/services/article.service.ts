import { Injectable } from '@angular/core';
import { Article } from 'app/shared/models/article';
import { Observable } from 'rxjs';
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
    return this.httpClient.get<Article>(`api/articles/${id}`);
  }

  /**
   * すべての学級だよりを取得する
   */
  getAll(): Observable<Article[]> {
    console.log(`AritcleService getAll`);
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
  create(article: Article): void {
    console.log(`AritcleService create [title: ${article.title}]`);
    // TODO: httpサービスを呼ぶ
    console.log(article);
    article.id = 10;
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

