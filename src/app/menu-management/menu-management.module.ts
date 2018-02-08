import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuManagementComponent } from './menu-management.component';
import { MealManagementComponent } from './meal-management/meal-management.component';
import { MealRegisterComponent } from './meal-management/meal-register/meal-register.component';
import { MealUpdateComponent } from './meal-management/meal-update/meal-update.component';
import { MaterialModule } from '../material/material.module';
import { ModalListGarnishComponent } from './meal-management/modal-list-garnish/modal-list-garnish.component';
import { MenuManagementService } from './menu-management.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [MenuManagementComponent,
    MealManagementComponent,
     MealRegisterComponent,
     MealUpdateComponent,
     ModalListGarnishComponent ],
  providers:[
    MenuManagementService
  ]
})
export class MenuManagementModule { }
