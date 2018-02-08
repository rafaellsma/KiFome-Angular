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
     authentication: this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
     })
      
    });

   }

  ngOnInit() {
  }
  
  authenticate(){
    if(this.authForm.valid){
      let auth = this.authForm.value;
    }
  }
}
