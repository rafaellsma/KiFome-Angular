import { Component, OnInit, Input } from '@angular/core';
import { Meal } from './order-meal.model';

@Component({
  selector: 'app-order-meal',
  templateUrl: './order-meal.component.html',
  styleUrls: ['./order-meal.component.css']
})
export class OrderMealComponent implements OnInit {

  @Input()
  meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
