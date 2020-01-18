import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewArticleComponent } from './view-article/view-article.component';


const routes: Routes = [
  {path: 'view', component: ViewArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
