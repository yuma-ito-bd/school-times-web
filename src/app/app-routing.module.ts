import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTopComponent } from './admin/top/admin-top.component';
import { AdminViewComponent } from './admin/view-article/admin-view.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { TopComponent } from './top/top.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  {path: '', component: TopComponent },
  {path: 'view/:id', component: ViewArticleComponent},
  {path: 'edit', component: EditArticleComponent}, // TODO: pathParameterでID指定
  {path: 'admin/top', component: AdminTopComponent},
  {path: 'admin/new', component: NewArticleComponent},
  {path: 'admin/view/:id', component: AdminViewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
