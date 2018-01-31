import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [UserAuthenticationComponent, UserRegisterComponent]
})
export class UserManagementModule { }
