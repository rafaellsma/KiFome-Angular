import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material/material.module';
import { UserManagementComponent } from './user-management.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UserManagementComponent, UserAuthenticationComponent, UserRegisterComponent]
})
export class UserManagementModule { }
