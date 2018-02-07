import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuManagementService } from '../../menu-management.service';
import { Garnish } from '../../../shared/models/garnish';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Meal } from '../../../shared/models/meal';

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
  daysOfWeek: Array<any> = [
  {id: 2, day: 'Segunda'},
  {id: 4, day: 'Terça'},
  {id: 8, day: 'Quarta'},
  {id: 16, day: 'Quinta'},
  {id: 32, day: 'Sexta'},
  {id: 64, day: 'Sábado'},
  {id: 1, day: 'Domingo'}];
  listDays: Array<number>;
  garnishes: Array<Garnish>;
  listGarnishes: Array<number>;
  mealForm: FormGroup;
  constructor(private router: Router, private menuService: MenuManagementService, private fb: FormBuilder) {
    this.listGarnishes = new Array<number>();
    this.listDays = new Array<number>();
    this.mealForm = this.fb.group({
      meal: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required]
    });

  }

  ngOnInit() {
    // this.GetGarnishies();
  }

  GetGarnishies() {
    this.menuService.GetGarnishies().subscribe(
      data => this.garnishes = data
    );
  }

  listGarnishies() {
    if (this.flag) {
      this.flag = false;
      this.buttonFlag = true;
    }else {
      this.flag = true;
      this.buttonFlag = false;
    }
  }

  addGarnishes(garnish: Garnish) {
    if (this.listGarnishes.length === 0) {
      this.listGarnishes.push(garnish.Id);
    }else {
      const index = this.listGarnishes.indexOf(garnish.Id);
      if (index !== -1) {
        this.listGarnishes.splice(index, 1);
      }else {
        this.listGarnishes.push(garnish.Id);
      }
    }
    console.log(this.listGarnishes);
  }

  addDays(Day: number) {
    if (this.listDays.length === 0) {
      this.listDays.push(Day);
    }else {
      const index = this.listDays.indexOf(Day);
      if (index !== -1) {
        this.listDays.splice(index, 1);
      }else {
        this.listDays.push(Day);
      }
    }
    console.log(this.listDays);
  }


  SaveMeal () {
    const meal: Meal = this.mealForm.value;
    meal.Garnishies = this.listGarnishes;
    const dias = this.listDays.reduce( (x, y) => {
      return x|y;
    });
    meal.Days = dias;
  }

  back() {
    this.router.navigate(['/pratos']);
  }
}

function validateMoeda(c: FormControl) {
  const RegexMoeda = /([0-9]{2})$/g;

  return RegexMoeda.test(c.value) ? null : {
    validateMoeda: {
      valid: false
    }
  };
}
