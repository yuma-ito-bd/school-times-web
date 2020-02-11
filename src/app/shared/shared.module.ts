import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ArticlesData } from 'in-memory/articles-data';
import { HeaderComponent } from './components/header/header.component';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ArticlesData),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    ArticleService
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }
