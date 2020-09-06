import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-contents-form',
    templateUrl: './contents-form.component.html',
    styleUrls: ['./contents-form.component.scss'],
})
export class ContentsFormComponent implements OnInit {
    @Input() form: FormControl;

    constructor() {}

    ngOnInit() {}
}
