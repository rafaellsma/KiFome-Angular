import { Component, OnInit } from '@angular/core';

import { Seller } from './seller/seller.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  sellers: Seller[] = [
    {
      id: 1,
      name: 'Rafael Albuquerque',
      rate: 5
    },
    {
      id: 2,
      name: 'Vinicius Santana',
      rate: 5
    }
  ];

  constructor() { }

  ngOnInit() {}
}
