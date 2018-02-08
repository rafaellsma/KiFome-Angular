import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Authentication } from '../models/authentication';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from 'moment';
import { User } from '../models/user';

@Injectable()
export class AuthService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded'
        })
    };

    constructor(private http: HttpClient) {}

    login(auth: Authentication) {
        const url = 'http://localhost:49849/token';

        const body = new HttpParams()
            .set('email', auth.Email)
            .set('password', auth.Password)
            .set('grant_type', 'password');

        const headers = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        };

        return this.http.post(url, body, headers)
            .do(res => this.setSession(res))
            .shareReplay();
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expires_in, 'second');

        localStorage.setItem('access_token', authResult.access_token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem('user_id', authResult.id);
        localStorage.setItem('user_name', authResult.name);
        localStorage.setItem('user_email', authResult.email);
    }

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
