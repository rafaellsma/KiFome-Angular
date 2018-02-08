import { Injectable } from '@angular/core';
import { Seller } from './seller/seller.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Withdrawal } from './local/local.model';
import { Meal } from './order-meal/order-meal.model';
import { Garnish } from './order-garnish/order-garnish.model';

@Injectable()
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAllSellers(): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>('http://localhost:49849/api/sellers');
  }

  getWithdrawalsBySellerId(sellerId: number): Observable<Withdrawal[]> {
    return this.httpClient.get<Withdrawal[]>(`http://localhost:49849/api/user/${sellerId}/withdrawal`);
  }

  getMealsBySellerId(sellerId: number): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`http://localhost:49849/api/user/${sellerId}/meals`);
  }

  getGarnishiesByMealId(mealId: number): Observable<Garnish[]> {
    return this.httpClient.get<Garnish[]>(`http://localhost:49849/api/meal/${mealId}/garnishies`);
  }
}
