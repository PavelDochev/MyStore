import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import serverUtils from '../_helpers/serverUtils';

@Injectable()
export class UserService {
    
    constructor(private http: HttpClient) { }

    getByUserName(userName:string) {
        return this.http.get(serverUtils.SERVER_URL + '/api/users/' + userName);
    }

    create(user:User) {
        return this.http.post(serverUtils.SERVER_URL + '/api/users/create', user);
    }
}