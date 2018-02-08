import { Injectable } from '@angular/core';
import { Authentication } from '../models/authentication';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from 'moment';
import { User } from '../models/user';

@Injectable()
export class AuthService {
    constructor() {}

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    currentUser(): User {
        return <User>{
            // tslint:disable-next-line:radix
            'Id': parseInt(localStorage.getItem('user_id')),
            'Name': localStorage.getItem('user_name'),
            'Email': localStorage.getItem('user_email')
        };
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
