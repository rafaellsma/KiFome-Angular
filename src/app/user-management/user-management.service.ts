import { Injectable } from "@angular/core";

import { Authentication } from "../shared/models/authentication";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "../shared/models/user";

@Injectable()
export class UserManagementService {

    constructor(private http: HttpClient) {}
  
    authenticate(authentication: Authentication): Observable<User> {
        return this.http.post<User>("http://localhost:49849/api/user", authentication);
    }
}