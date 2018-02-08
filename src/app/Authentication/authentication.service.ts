import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {}

}