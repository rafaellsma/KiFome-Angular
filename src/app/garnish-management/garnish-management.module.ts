import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGarnishesComponent } from './list-garnishes/list-garnishes.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ListGarnishesComponent]
})
export class GarnishManagementModule { }
