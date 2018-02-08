import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { Seller } from './seller/seller.model';
import { Withdrawal } from './local/local.model';
import { OrderService } from './order.service';
import { Meal } from './order-meal/order-meal.model';
import { Garnish } from './order-garnish/order-garnish.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  sellers: Seller[];
  withdrawals: Withdrawal[];
  meals: Meal[];
  garnishies: Garnish[];

  sellerForm: FormGroup;
  withdrawalForm: FormGroup;
  mealForm: FormGroup;
  garnishForm: FormGroup;

  constructor(private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderService.getAllSellers().subscribe((data) => {
      this.sellers = data;
    });

    this.sellerForm = this.formBuilder.group({
      cozinheiro: [null, Validators.required]
    });

    this.withdrawalForm = this.formBuilder.group({
      local: [null, Validators.required]
    });

    this.mealForm = this.formBuilder.group({
      prato: [null, Validators.required]
    });

    this.garnishForm = this.formBuilder.group({
      acompanhamento: [null, Validators.required]
    });
  }

  ngOnSellerNext() {
    const sellerId = this.sellerForm.value.cozinheiro;
    this.orderService.getWithdrawalsBySellerId(sellerId).subscribe((data) => {
      this.withdrawals = data;
    });
  }

  ngOnWithdrawalNext() {
    const sellerId = this.withdrawalForm.value.local;
    this.orderService.getMealsBySellerId(sellerId).subscribe((data) => {
      this.meals = data;
    });
  }

  ngOnMealNext() {
    const mealId = this.mealForm.value.prato;
    this.orderService.getGarnishiesByMealId(mealId).subscribe((data) => {
      this.garnishies = data;
    });
  }
}
