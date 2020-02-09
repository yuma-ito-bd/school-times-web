import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  /**
   * GETリクエストを送る
   * @param url リクエスト先URL
   * @param options リクエストオプション
   */
  get<T>(url: string, options?: object): Observable<T> {
    return this.httpClient.get<T>(url, options).pipe(
      map( data => {
        console.log(`SUCCESS GET request [data: ${JSON.stringify(data)}]`);
        return data;
      })
    );
  }

  /**
   * POSTリクエストを送る
   * @param url URL
   * @param body bodyオブジェクト
   */
  post<T>(url: string, body?: object): Observable<T> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
    return this.httpClient.post<T>(url, body, options);
  }
}
