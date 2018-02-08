import { Component, OnInit } from '@angular/core';
import { MenuManagementService } from './menu-management.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  days: Array<String> = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  pratos = [{name: 'Salt'}, {name: 'Paprika'}, {name: 'Pepper'}];
  id: number;
  menu;
  constructor(private menuService: MenuManagementService, private route:ActivatedRoute) {
    this.route.params.subscribe(
      params => this.id = params['id']
    );
    console.log(this.id);
   }

  ngOnInit() {
    this.GetMenu();
  }

  GetMenu(){
    this.menuService.GetMenuById(this.id).subscribe(
      data => this.menu = data
    );
  }

  viewMeal(meal, day) {
    console.log(meal, day);
  }

}
