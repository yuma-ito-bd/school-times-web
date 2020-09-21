import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /**
     * onSuccess
     */
    public onSuccess(event: FirebaseUISignInSuccessWithAuthResult) {
        console.log(event);
    }
}
