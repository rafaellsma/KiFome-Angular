import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {

  days: Array<String> = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  pratos = [{name: 'Salt'}, {name: 'Paprika'}, {name: 'Pepper'}];
  constructor() { }

  ngOnInit() {
  }

  viewMeal(meal, day) {
    console.log(meal, day);
  }

}
