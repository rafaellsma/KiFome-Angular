import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGarnishesComponent } from './list-garnishes/list-garnishes.component';
import { MaterialModule } from '../material/material.module';
import { GarnishService } from './garnish.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ListGarnishesComponent],
  providers: [
    GarnishService
  ]
})
export class GarnishManagementModule { }
