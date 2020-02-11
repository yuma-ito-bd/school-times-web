import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTopComponent } from './admin-top/admin-top.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { TopComponent } from './top/top.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  {path: '', component: TopComponent },
  {path: 'view/:id', component: ViewArticleComponent},
  {path: 'new', component: NewArticleComponent},
  {path: 'edit', component: EditArticleComponent}, // TODO: pathParameterでID指定
  {path: 'admin/top', component: AdminTopComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
