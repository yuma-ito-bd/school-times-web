import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { AdminTopComponent } from './top/admin-top.component';
import { AdminViewComponent } from './view-article/admin-view.component';

const routes: Routes = [
    { path: '', component: AdminTopComponent },
    { path: 'new', component: NewArticleComponent },
    { path: 'view/:id', component: AdminViewComponent },
    { path: 'edit/:id', component: EditArticleComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
