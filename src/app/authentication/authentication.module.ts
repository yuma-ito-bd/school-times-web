import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const components = [LoginComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule],
    exports: [...components],
})
export class AuthenticationModule {}
