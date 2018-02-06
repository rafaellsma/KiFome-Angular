import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGarnishesComponent } from './list-garnishes/list-garnishes.component';
import { MaterialModule } from '../material/material.module';
import { GarnishService } from './garnish.service';
import { CreateGarnishComponent } from './create-garnish/create-garnish.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ListGarnishesComponent, CreateGarnishComponent],
  providers: [
    GarnishService
  ],
  entryComponents: [CreateGarnishComponent]
})
export class GarnishManagementModule { }
