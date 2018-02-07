import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { OrderService } from './order.service';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [OrderComponent, SellerComponent],
    providers: [OrderService]
})
export class OrderModule {}
