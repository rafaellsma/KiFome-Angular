import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ModalListGarnishComponent } from './modal-list-garnish/modal-list-garnish.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuManagementService } from '../menu-management.service';
import { Meal } from '../../shared/models/meal';
@Component({
  selector: 'app-meal-management',
  templateUrl: './meal-management.component.html',
  styleUrls: ['./meal-management.component.css']
})
export class MealManagementComponent implements OnInit {
  displayedColumns = ['pratos', 'descricao', 'preco', 'dias', 'guarnicoes', 'acoes'];
  dataSource;
  id: number;
  meal: Meal[];
  constructor(private dialog: MatDialog, private router: Router, private menuService: MenuManagementService, 
    private route: ActivatedRoute) {
      this.meal = new Array<Meal>();
      this.route.params.subscribe(
        params => this.id = params['id']
      );
      console.log(this.id);
   }

  ngOnInit() {
    this.GetMealById();
  }

  GetMealById() {
    this.menuService.GetMealById(this.id).subscribe(
      data => {
        this.meal.push(data);
        this.dataSource = new MatTableDataSource(this.meal);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalListGarnishComponent, {
      width: '250px'
    });
  }

  addMeal() {
    this.router.navigate(['/cadastrar-pratos']);
  }
}