import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from 'app/shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private user: UserService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // 教師または管理者のみアクセス可能
        const { attribute } = this.user;
        if (attribute.value === 'SuperUser' || attribute.value === 'Teacher') {
            return true;
        }
        return false;
    }
}
