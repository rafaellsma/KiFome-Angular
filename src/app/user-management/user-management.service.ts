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
}
