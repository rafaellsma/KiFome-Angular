import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Authentication} from './../models/Authentication';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Customer } from '../models/customer';


@Injectable()
export class CustomerService {
    constructor(private http: Http) {}
   
    public GetCustomers(){
        return this.http.get("http://localhost:49849/api/user")
                 .map(r => r.json());
    }

    public RegisterCustomers(customer:Customer){
        return this.http.post("http://localhost:49849/api/user", customer)
               .map(r => r);
    }

}