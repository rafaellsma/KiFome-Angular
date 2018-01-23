import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  providers: [CustomerService],
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  customer: Customer;
  constructor(private customerService:CustomerService) {
    this.customer = new Customer();
  }

  ngOnInit() {
  }

  public registerCustomer(customer: Customer){
    this.customerService.RegisterCustomers(customer).subscribe(
        response => this.showSuccessMessage(response)
    );
  }

  private showSuccessMessage(response){
    console.log(response);
  }

}
