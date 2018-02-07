import { Injectable } from '@angular/core';
import { Seller } from './seller/seller.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAllSellers(): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>('http://localhost:49849/api/sellers');
  }

}
