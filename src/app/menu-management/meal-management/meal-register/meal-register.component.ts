import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuManagementService } from '../../menu-management.service';
import { Garnish } from '../../../shared/models/garnish';
@Component({
  selector: 'app-meal-register',
  templateUrl: './meal-register.component.html',
  styleUrls: ['./meal-register.component.css']
})
export class MealRegisterComponent implements OnInit {

  flag: boolean = false;
  flagSalvar: boolean = false;
  buttonFlag: boolean = true;
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  garnishes: Array<Garnish>;
  constructor(private router:Router, private menuService: MenuManagementService) { }

  ngOnInit() {
    this.GetGarnishies();
  }

  GetGarnishies(){
    this.menuService.GetGarnishies().subscribe(
      data => this.garnishes = data
    );
  }

  listGarnishies(){
    if(this.flag){
      this.flag = false;
      this.buttonFlag = true;
    }else{
      this.flag = true;
      this.buttonFlag = false;
    }
  }

  back(){
    this.router.navigate(["/pratos"]);
  }
}
