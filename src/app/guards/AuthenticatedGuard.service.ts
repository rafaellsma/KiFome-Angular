import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from '../shared/service/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticatedGuardService implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.auth.isLoggedOut()) {
            this.router.navigateByUrl('gerenciamento-usuario');
            return false;
        }
        return true;
    }
}
