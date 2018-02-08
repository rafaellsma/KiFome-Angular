import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GarnishDTO } from './models/garnish.dto';
import { Observable } from 'rxjs/Observable';
import { Garnish } from './models/garnish.model';
import { AuthService } from '../shared/service/auth.service';

@Injectable()
export class GarnishService {
  url = 'http://localhost:49849/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };

  getAllGarnishes(): Observable<GarnishDTO[]> {
    return this.httpClient.get<GarnishDTO[]>(this.url + 'api/garnishes', this.httpOptions);
  }

  createGarnish(garnish: Garnish) {
    return this.httpClient.post(
      this.url + 'api/garnishes',
      JSON.stringify(garnish),
      this.httpOptions
    );
  }
}

