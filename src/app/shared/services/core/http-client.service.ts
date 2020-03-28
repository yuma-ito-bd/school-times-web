import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class HttpClientService {
    constructor(private httpClient: HttpClient) {}

    private getUrl(path: string) {
        return `${environment.apiEndpoint}/${path}`;
    }

    /**
     * GETリクエストを送る
     * @param path リソースパス
     * @param queryObj クエリパラメータオブジェクト
     */
    get<T>(
        path: string,
        queryObj?: { [param: string]: string | ReadonlyArray<string> }
    ): Observable<T> {
        const url = this.getUrl(path);
        const options = queryObj ? { params: new HttpParams({ fromObject: queryObj }) } : {};
        console.log(`http GET request ${url}`);
        return this.httpClient.get<T>(url, options).pipe(
            tap(data => {
                console.log(`SUCCESS GET request [data: ${JSON.stringify(data)}]`);
            })
        );
    }

    /**
     * POSTリクエストを送る
     * @param path リソースパス
     * @param body bodyオブジェクト
     */
    post<T>(path: string, body?: object): Observable<T> {
        const url = this.getUrl(path);
        console.log(`http POST request ${url} [body: ${JSON.stringify(body)}`);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.post<T>(url, body, options).pipe(
            tap(data => {
                console.log(`SUCCESS POST request [data: ${JSON.stringify(data)}]`);
            })
        );
    }

    /**
     * PUTリクエストを送る
     * @param path リソースパス
     * @param body bodyオブジェクト
     */
    put<T>(path: string, body?: object): Observable<T> {
        const url = this.getUrl(path);
        console.log(`http PUT request ${url} [body: ${JSON.stringify(body)}`);
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpClient.put<T>(url, body, options).pipe(
            // TODO: backend apiができたら消す
            concatMap(() => this.get<T>(path)),
            tap(data => {
                console.log(`SUCCESS PUT request [data: ${JSON.stringify(data)}]`);
            })
        );
    }
}
