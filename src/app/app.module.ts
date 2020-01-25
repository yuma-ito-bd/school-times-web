import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewArticleComponent } from './view-article/view-article.component';

// 日付の表示のためにロケールを日本に変更
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    ViewArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
