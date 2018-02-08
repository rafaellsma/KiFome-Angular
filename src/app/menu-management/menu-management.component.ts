import { Component, OnInit } from '@angular/core';
import { MenuManagementService } from './menu-management.service';
import { ActivatedRoute, Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import { Menu } from '../shared/models/menu';
import { Meal } from '../shared/models/meal';
import { MenuList } from '../shared/models/menu-list';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  // days: Array<String> = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  // pratos = [{name: 'Salt'}, {name: 'Paprika'}, {name: 'Pepper'}];
  id: number;
  menu: Menu = new Menu();
  mealMonday: Array<Meal> = new Array<Meal>();
  mealTuesday: Array<Meal> = new Array<Meal>();
  mealWednesday: Array<Meal> = new Array<Meal>();
  mealThursday: Array<Meal> = new Array<Meal>();
  mealFriday: Array<Meal> = new Array<Meal>();
  mealSaturday: Array<Meal> = new Array<Meal>();
  mealSunday: Array<Meal> = new Array<Meal>();
  menuList: MenuList;
  mealList: Array<MenuList> = new Array<MenuList>();
  constructor(private menuService: MenuManagementService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      params => this.id = params['id']
    );
   }

  ngOnInit() {
    this.GetMenu();
  }

  GetMenu() {
    this.menuService.GetMenuById(this.id).subscribe(
      data => {
        this.menu = data;
        this.setMenu(data);
      }
    );
  }

  setMenu(data: Menu) {
    data.Meals.forEach(meal => {
      if (meal.Days === 2) {
        this.mealMonday.push(meal);
      }else if (meal.Days === 4) {
        this.mealTuesday.push(meal);
      }else if (meal.Days === 8) {
        this.mealWednesday.push(meal);
      }else if (meal.Days === 16) {
        this.mealThursday.push(meal);
      }else if (meal.Days === 32) {
        this.mealFriday.push(meal);
      }else if (meal.Days === 64) {
        this.mealSaturday.push(meal);
      }else if (meal.Days === 1) {
        this.mealSunday.push(meal);
      }
    });
    
    this.mealList.push(this.MenuListGenerate('Segunda', this.mealMonday));
    this.mealList.push(this.MenuListGenerate('Terça', this.mealTuesday));
    this.mealList.push(this.MenuListGenerate('Quarta', this.mealWednesday));
    this.mealList.push(this.MenuListGenerate('Quinta', this.mealThursday));
    this.mealList.push(this.MenuListGenerate('Sext', this.mealFriday));
    this.mealList.push(this.MenuListGenerate('Sábado', this.mealSaturday));
    this.mealList.push(this.MenuListGenerate('Domingo', this.mealSunday));

  }

  MenuListGenerate(day, meal): MenuList {
    const menuList = new MenuList();
    menuList.Day = day;
    menuList.Meals = meal;
    return menuList;
  }

  addMeal() {
    this.router.navigate(['/cadastrar-pratos']);
  }

  viewMeal(day, meal) {
    console.log(day, meal);
    this.router.navigate(['/pratos/'+ meal.Id]);

  }

}
