import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CustomerComponent } from './customer/customer.component';
import { ModuleWithProviders } from '@angular/core';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';


const APP_ROUTES:Routes = [
    {path: '', component: AuthenticationComponent },
    {path: 'Customer', component: CustomerComponent},
    {path: 'Customer/register-customer', component: CustomerRegisterComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);