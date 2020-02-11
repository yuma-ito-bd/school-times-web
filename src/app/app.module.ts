import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminTopComponent } from './admin-top/admin-top.component';
import { ArticleCardForAdminComponent } from './admin-top/article-card-for-admin/article-card-for-admin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SharedModule } from './shared/shared.module';
import { ArticleCardComponent } from './top/article-card/article-card.component';
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
    ArticleCardComponent,
    AdminTopComponent,
    ArticleCardForAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
