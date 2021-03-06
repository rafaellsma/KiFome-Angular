import { Routes } from '@angular/router';
import { UserAuthenticationComponent } from './user-management/user-authentication/user-authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-management/user-register/user-register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MealManagementComponent } from './menu-management/meal-management/meal-management.component';
import { MenuManagementComponent } from './menu-management/menu-management.component';
import { ListGarnishesComponent } from './garnish-management/list-garnishes/list-garnishes.component';
import { ProfileComponent } from './profile/profile.component';
import { UnauthenticatedGuardService } from './guards/UnauthenticatedGuard.service';
import { AuthenticatedGuardService } from './guards/AuthenticatedGuard.service';



const appRouting: Routes =
[
    {
        path: 'gerenciamento-usuario',
        component: UserManagementComponent,
        canActivate: [UnauthenticatedGuardService]
    },
    {
        path: '',
        component: HomePageComponent,
        canActivate: [UnauthenticatedGuardService]
    },
    {
        path: 'prato', component: MealManagementComponent
    },
    {
        path: 'menu', component: MenuManagementComponent
    },
    {
        path: 'acompanhamentos',
        component: ListGarnishesComponent,
        canActivate: [AuthenticatedGuardService]
    },
    {
         path: 'perfil',
         component: ProfileComponent,
         canActivate: [AuthenticatedGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouting , { enableTracing: false })
    ]
})

export class AppRouting {}
