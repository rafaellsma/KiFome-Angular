import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-management/user-authentication/user-authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-management/user-register/user-register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MealManagementComponent } from './menu-management/meal-management/meal-management.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';


const appRouting: Routes =
[
    {
        path: '', component: UserManagementComponent
    },
    {
        path: 'cadastrar-usuario', component: UserRegisterComponent
    },
    {
        path: 'pagina-inicial', component: HomePageComponent
    },
    {
        path: 'prato', component: MealManagementComponent
    },
    {
        path: 'menu', component: MenuManagementComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting , { enableTracing: false })
    ]
})

export class AppRouting {}
