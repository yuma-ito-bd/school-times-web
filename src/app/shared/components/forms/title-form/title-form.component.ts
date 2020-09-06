import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-title-form',
    templateUrl: './title-form.component.html',
    styleUrls: ['./title-form.component.scss'],
})
export class TitleFormComponent implements OnInit {
    @Input() form: FormControl;

    constructor() {}

    ngOnInit() {}
}
