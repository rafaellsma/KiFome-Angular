import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Authentication} from './../models/Authentication';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {}
   
    Authenticate(authentication: Authentication){
    
        return this.http.post("http://localhost:49849/api/authentication/LoginAuthentication", authentication)
                 .map(r => r.json());
    }

}