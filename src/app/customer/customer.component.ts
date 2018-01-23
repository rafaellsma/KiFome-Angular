import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  providers: [CustomerService],
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  //Variables
    customers: any;
  //End

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.GetCustomers();
  }

  public GetCustomers(){
    this.customerService.GetCustomers().subscribe(
      response => this.setCustomers(response)
    );
  }

  private setCustomers(response){
    this.customers = response;
    console.log(this.customers);
  }

}
