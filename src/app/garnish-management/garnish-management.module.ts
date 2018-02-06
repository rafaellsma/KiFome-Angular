import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGarnishesComponent } from './list-garnishes/list-garnishes.component';
import { MaterialModule } from '../material/material.module';
import { GarnishService } from './garnish.service';
import { CreateGarnishComponent } from './create-garnish/create-garnish.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ListGarnishesComponent, CreateGarnishComponent],
  providers: [
    GarnishService
  ]
})
export class GarnishManagementModule { }
