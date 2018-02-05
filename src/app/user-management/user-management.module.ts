import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material/material.module';
import { UserManagementComponent } from './user-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementService } from './user-management.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    UserManagementComponent,
    UserAuthenticationComponent,
    UserRegisterComponent
  ],
  providers: [
    UserManagementService
  ]
})
export class UserManagementModule { }
