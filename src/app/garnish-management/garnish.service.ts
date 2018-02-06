import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GarnishDTO } from './models/garnish.dto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GarnishService {

  constructor(private httpClient: HttpClient) { }

  getAllGarnishes(): Observable<GarnishDTO[]> {
    return this.httpClient.get<GarnishDTO[]>('http://localhost:49849/api/garnishes');
  }
}

