import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Garnish } from "../shared/models/garnish";
import { Meal } from "../shared/models/meal";

@Injectable()
export class MenuManagementService {
    constructor(private http: HttpClient) {}

    GetGarnishies(): Observable<Garnish[]> {
       return this.http.get<Garnish[]>('http://localhost:49849/api/garnishes');
    }

    GetMeals(): Observable<Meal[]> {
        return this.http.get<Meal[]>('http://localhost:49849/api/meal');
    }

    GetMenuById(id: number) {
        return this.http.get('http://localhost:49849/api/menu/'+id);
    }

    CreateMeal(meal: Meal){
        return this.http.post('http://localhost:49849/api/meal', meal);
    }
}
