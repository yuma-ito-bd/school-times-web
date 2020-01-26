import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { TopComponent } from './top/top.component';
import { HeaderComponent } from './shared/header/header.component';

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
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-JP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
