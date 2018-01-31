import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserAuthenticationComponent, UserRegisterComponent]
})
export class UserManagementModule { }
