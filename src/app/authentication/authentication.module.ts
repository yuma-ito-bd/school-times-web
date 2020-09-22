import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirebaseUIModule } from 'firebaseui-angular';
import { LoginComponent } from './login/login.component';

const components = [LoginComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, FirebaseUIModule, AngularFireDatabaseModule],
    exports: [...components],
})
export class AuthenticationModule {}
