import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-management/user-authentication/user-authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-management/user-register/user-register.component';
import { UserManagementComponent } from './user-management/user-management.component';

const appRouting: Routes =
[
    {
        path: '', component: UserManagementComponent
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
