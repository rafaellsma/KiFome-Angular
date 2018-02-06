import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Garnish } from "../shared/models/garnish";

@Injectable()
export class MenuManagementService {
    constructor(private http:HttpClient) {}
    
    GetGarnishies(): Observable<Garnish[]>{
       return this.http.get<Garnish[]>("http://localhost:49849/api/garnishes");
    }
}