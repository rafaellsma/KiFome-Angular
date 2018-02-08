import 'rxjs/add/operator/catch';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).catch((err) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                this.router.navigateByUrl('gerenciamento-usuario');
            }
            Observable.throw(err);
        });
    }
}