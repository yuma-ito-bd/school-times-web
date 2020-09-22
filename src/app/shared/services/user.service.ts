import { Injectable } from '@angular/core';
import { UserAttribute } from '../models/user-attribute';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    id: number;
    name: string;
    classId: number;
    attribute: UserAttribute;

    constructor() {}

    public setUser(user: Partial<UserService>) {
        this.id = user.id;
        this.name = user.name;
        this.classId = user.classId;
        this.attribute = user.attribute;
    }
}
