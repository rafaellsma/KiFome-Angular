import { Component } from '@angular/core';
import {Authentication} from './../models/Authentication'
import {AuthenticationService} from './authentication.service';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent  {

  authentication: Authentication; 
  constructor(private authenticationService: AuthenticationService) {
    this.authentication = new Authentication();
   }

  

  Authenticate(authentication: Authentication):void{
    console.log(authentication); 
    this.authenticationService.Authenticate(authentication).subscribe(
      response => this.setLoggedUser(response)
    );
  }

  setLoggedUser(response){
    console.log(response);
  }
}
