import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { AuthService } from './service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NavbarHeaderComponent],
  declarations: [NavbarHeaderComponent],
  providers: [AuthService]
})
export class SharedModule { }
