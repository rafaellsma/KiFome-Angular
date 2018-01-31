import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserManagementModule } from './user-management/user-management.module';
import { NavbarHeaderComponent } from './shared/components/navbar-header/navbar-header.component';
import { AppRouting } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    UserManagementModule,
    RouterModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
