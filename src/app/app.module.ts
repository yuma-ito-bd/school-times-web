import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeJa from '@angular/common/locales/ja';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ArticlesData } from 'in-memory/articles-data';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ArticleService } from './shared/services/article.service';
import { TopComponent } from './top/top.component';
import { ViewArticleComponent } from './view-article/view-article.component';

// 日付の表示のためにロケールを日本に変更
registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    ViewArticleComponent,
    NewArticleComponent,
    EditArticleComponent,
    TopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ArticlesData),
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
