import { Component, OnInit } from '@angular/core';

import { Seller } from './seller/seller.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  sellers: Seller[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllSellers().subscribe((data) => {
      this.sellers = data;
    });
  }
}
