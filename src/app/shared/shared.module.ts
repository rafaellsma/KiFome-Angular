import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NavbarHeaderComponent],
  declarations: [NavbarHeaderComponent]
})
export class SharedModule { }
