import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'app/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ArticleForSuperUserService } from './services/article-for-super-user.service';
import { ArticleForTeacherService } from './services/article-for-teacher.service';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(ArticlesData),
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
    ],
    providers: [ArticleForTeacherService, ArticleForSuperUserService],
    exports: [HeaderComponent],
})
export class SharedModule {}
