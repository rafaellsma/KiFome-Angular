import { Injectable } from '@angular/core';
import { Authentication } from '../models/authentication';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import * as moment from 'moment';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    private loggedInAsync = new BehaviorSubject<boolean>(false);
        get isLoggedInAsync() {
            this.loggedInAsync.next(this.isLoggedIn());
            return this.loggedInAsync.asObservable();
        }
    constructor(private http: HttpClient) {}

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_email');
        this.loggedInAsync.next(false);
    }

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
            .do(res => {
                this.setSession(res);
                this.loggedInAsync.next(true);
            })
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
