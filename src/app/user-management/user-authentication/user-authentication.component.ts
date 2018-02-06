import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../../shared/models/authentication';
import { UserManagementService } from '../user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  authForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserManagementService, private router: Router) {

    this.authForm = this.fb.group({
     
      Email: [null, Validators.required],
      Password: [null, Validators.required]
    
      
    });

   }

  ngOnInit() {
  }
  
  authenticate(){
    let auth = this.authForm.value;
    this.userService.authenticate(auth).subscribe(
      data => {
        localStorage.setItem("loggedUser",JSON.stringify(data));
        console.log(localStorage.getItem("loggedUser"));
        if(JSON.parse(localStorage.getItem("loggedUser"))){
          this.router.navigate(["/menu"]);
        }
      }
    );
    
    
  }
}
