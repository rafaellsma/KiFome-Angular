import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user';
import { Authentication } from '../shared/models/authentication';
import * as moment from 'moment';

@Injectable()
export class UserManagementService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    registerUser(user): Observable<any> {
        return this.http.post(
            'http://localhost:49849/api/user',
            JSON.stringify(user),
            this.httpOptions
        );
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
}
