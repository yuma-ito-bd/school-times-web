import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { TopComponent } from './top/top.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [
    { path: 'top', component: TopComponent, canActivate: [AuthGuard] },
    { path: 'view/:id', component: ViewArticleComponent },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
