import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).catch((err: any) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                this.router.navigateByUrl('gerenciamento-usuario');
            }

            return Observable.throw(err);
        });
    }
}
