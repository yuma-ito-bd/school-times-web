import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { EditArticleComponent } from './../admin/edit-article/edit-article.component';
import { NewArticleComponent } from './../admin/new-article/new-article.component';
import { AdminTopComponent } from './../admin/top/admin-top.component';
import { ArticleCardForAdminComponent } from './../admin/top/article-card-for-admin/article-card-for-admin.component';
import { AdminViewComponent } from './../admin/view-article/admin-view.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminTopComponent,
        ArticleCardForAdminComponent,
        AdminViewComponent,
        NewArticleComponent,
        EditArticleComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
    ],
})
export class AdminModule {}
