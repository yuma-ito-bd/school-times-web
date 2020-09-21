import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { TopComponent } from './top/top.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
    { path: '', component: TopComponent, pathMatch: 'full' },
    { path: 'view/:id', component: ViewArticleComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
