import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleFormComponent } from './title-form/title-form.component';

const components = [TitleFormComponent];

@NgModule({
    declarations: [...components],
    imports: [CommonModule],
    exports: [...components],
})
export class FormsModule {}
