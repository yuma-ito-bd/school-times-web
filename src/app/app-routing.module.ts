import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
  {path: 'view', component: ViewArticleComponent}, // TODO: pathParameterでID指定
  {path: 'new', component: NewArticleComponent},
  {path: 'edit', component: EditArticleComponent}, // TODO: pathParameterでID指定
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
