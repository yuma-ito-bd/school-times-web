import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ContentsFormComponent } from './contents-form/contents-form.component';
import { TitleFormComponent } from './title-form/title-form.component';

const components = [TitleFormComponent, ContentsFormComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    exports: [...components],
})
export class FormsModule {}
