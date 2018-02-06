import { Component, OnInit, Input } from '@angular/core';
import { Seller } from './seller.model';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  @Input()
  seller: Seller;

  constructor() { }

  ngOnInit() {
  }

}
