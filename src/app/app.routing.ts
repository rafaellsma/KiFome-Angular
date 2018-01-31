import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-management/user-authentication/user-authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-management/user-register/user-register.component';

const appRouting: Routes =
[
    {
        path: '', component: UserAuthenticationComponent
    },
    {
        path: 'cadastrar-usuario', component: UserRegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting , { enableTracing: false })
    ]
})

export class AppRouting {}
