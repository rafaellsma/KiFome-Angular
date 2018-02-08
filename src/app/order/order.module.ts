import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { OrderService } from './order.service';
import { LocalComponent } from './local/local.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderMealComponent } from './order-meal/order-meal.component';
import { OrderGarnishComponent } from './order-garnish/order-garnish.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [OrderComponent, SellerComponent, LocalComponent, OrderMealComponent, OrderGarnishComponent, ReviewComponent],
    providers: [OrderService]
})
export class OrderModule {}
