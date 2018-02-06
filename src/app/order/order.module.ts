import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [OrderComponent, SellerComponent]
})
export class OrderModule {}
