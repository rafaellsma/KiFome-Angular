import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user';

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
