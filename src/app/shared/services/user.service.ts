import { Injectable } from '@angular/core';
import { UserAttribute } from '../models/user-attribute';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    id: number;
    name: string;
    attribute: UserAttribute;

    constructor() {
        // TODO: 一時的に設定
        this.id = 11;
        this.name = '山田 太郎';
        this.attribute = new UserAttribute('Teacher');
    }
}
