import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserManagementModule } from './user-management/user-management.module';
import { AppRouting } from './app.routing';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { HomePageModule } from './home-page/home-page.module';
import { MenuManagementModule } from './menu-management/menu-management.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserManagementModule,
    HomePageModule,
    RouterModule,
    AppRouting,
    SharedModule,
    MenuManagementModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
