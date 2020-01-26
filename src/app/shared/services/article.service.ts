import { Injectable } from '@angular/core';
import { Article } from 'app/shared/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleList: Article[];

  constructor() {
    // TODO: httpサービス
    this.articleList = [
      new Article('おはよう', 'Good Morning!', 'A先生'),
      new Article('こんにちは', 'Good Afternoon!', 'B先生'),
      new Article('こんばんは', 'Good Evening!', 'C先生')
    ];
    this.articleList.forEach((article, index) => {
      article.id = index;
    });
  }

  /**
   * 学級だよりを1件取得する
   * @param id 学級だよりのID
   */
  get(id: number): Article {
    console.log(`AritcleService get [id: ${id}]`);
    return this.articleList.find((article) => article.id === id);
  }

  /**
   * すべての学級だよりを取得する
   */
  getAll(): Article[] {
    console.log(`AritcleService getAll`);
    // TODO: httpサービスを呼ぶ
    return this.articleList;
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

