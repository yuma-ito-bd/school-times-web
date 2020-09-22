import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { FirebaseUser } from 'app/shared/interfaces/firebase-user';
import { UserAttribute } from 'app/shared/models/user-attribute';
import { UserService } from 'app/shared/services/user.service';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        private userService: UserService,
        private auth: AngularFireAuth,
        private database: AngularFireDatabase,
        private router: Router
    ) {}

    ngOnInit() {}

    /**
     * ログイン成功時の処理
     */
    public async onSuccess(event: FirebaseUISignInSuccessWithAuthResult) {
        // Realtime DataBaseからユーザー情報を取得する
        const { uid: userId } = event.authResult.user;
        const user = await this.database
            .object<FirebaseUser>(`users/${userId}`)
            .valueChanges()
            .pipe(take(1))
            .toPromise();

        // UserServiceにセット
        this.userService.setUser({
            id: user.id,
            name: user.name,
            classId: user.classId,
            attribute: UserAttribute.fromNumber(user.attribute),
        });

        // TOP画面に遷移
        this.router.navigate(['top']);
    }
    public logout() {
        this.auth.signOut();
    }
}
