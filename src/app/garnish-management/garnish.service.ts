import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GarnishDTO } from './models/garnish.dto';
import { Observable } from 'rxjs/Observable';
import { Garnish } from './models/garnish.model';

@Injectable()
export class GarnishService {
  url = 'http://localhost:49849/';

  constructor(private httpClient: HttpClient) { }

  getAllGarnishes(): Observable<GarnishDTO[]> {
    return this.httpClient.get<GarnishDTO[]>(this.url + 'api/garnishes');
  }

  createGarnish(garnish: Garnish) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post(
      this.url + 'api/garnishes',
      JSON.stringify(garnish),
      httpOptions
    );
  }
}

