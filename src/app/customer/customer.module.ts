import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        CustomerComponent,
        CustomerRegisterComponent
    ],
    exports: [
        CustomerComponent
    ]
})
export class CustomerModule {}