import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ModalListGarnishComponent } from './modal-list-garnish/modal-list-garnish.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal-management',
  templateUrl: './meal-management.component.html',
  styleUrls: ['./meal-management.component.css']
})
export class MealManagementComponent implements OnInit {
  displayedColumns = ['pratos', 'descricao', 'preco', 'dias', 'guarnicoes'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalListGarnishComponent, {
      width: '250px'
    });
  }

  addMeal() {
    this.router.navigate(["/cadastrar-pratos"]);
  }
}

const ELEMENT_DATA = [
  {pratos: 1, descricao: 'Hydrogen', preco: 1.0079, dias: 'H'},
  {pratos: 2, descricao: 'Helium', preco: 4.0026, dias: 'He'},
  {pratos: 3, descricao: 'Lithium', preco: 6.941, dias: 'Li'}
];
