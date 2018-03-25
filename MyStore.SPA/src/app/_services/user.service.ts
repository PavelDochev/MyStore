import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    backEndURL:string = "http://localhost:8080";
    
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getByUserName(userName:string) {
        return this.http.get(this.backEndURL + '/api/users/' + userName);
    }

    create(user: User) {
        return this.http.post(this.backEndURL + '/api/users/create', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}