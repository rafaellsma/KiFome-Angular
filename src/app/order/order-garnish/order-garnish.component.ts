import { Component, OnInit, Input } from '@angular/core';
import { Garnish } from './order-garnish.model';

@Component({
  selector: 'app-order-garnish',
  templateUrl: './order-garnish.component.html',
  styleUrls: ['./order-garnish.component.css']
})
export class OrderGarnishComponent implements OnInit {

  @Input()
  garnish: Garnish;

  constructor() { }

  ngOnInit() {
  }

}
