import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-management/user-authentication/user-authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-management/user-register/user-register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MealManagementComponent } from './menu-management/meal-management/meal-management.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { MealRegisterComponent } from './menu-management/meal-management/meal-register/meal-register.component';
import { MealUpdateComponent } from './menu-management/meal-management/meal-update/meal-update.component';


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
        path: 'pratos', component: MealManagementComponent
    },
    {
        path: 'cadastrar-pratos', component: MealRegisterComponent
    },
    {
        path: 'alterar-pratos', component: MealUpdateComponent
    },
    {
        path: 'menu/:id', component: MenuManagementComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting , { enableTracing: false })
    ]
})

export class AppRouting {}
