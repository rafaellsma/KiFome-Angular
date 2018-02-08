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
import { GarnishManagementModule } from './garnish-management/garnish-management.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { UnauthorizedInterceptor } from './interceptors/UnauthorizedInterceptor';


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
    GarnishManagementModule,
    ReactiveFormsModule,
    ProfileModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
