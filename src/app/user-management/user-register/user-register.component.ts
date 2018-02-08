import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserManagementService } from '../user-management.service';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(public snackBar: MatSnackBar, private fb: FormBuilder, private userManagementService: UserManagementService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: [
        '',
        [
          Validators.required,
          passwordConfirming,
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ],
      ConfirmPassword: [
        '',
        [
          Validators.required,
          passwordConfirming,
          Validators.minLength(6),
          Validators.maxLength(25)
        ]
      ]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.userManagementService.registerUser(user)
        .catch(
          (e) => {
            console.log(e);
            this.snackBar.open(
              e.error.ExceptionMessage,
              'Fechar',
              { duration: 2000 }
            );
            return Observable.of(e);
          }
        )
        .subscribe((data) => {
          if (data === null) {
            this.snackBar.open(
              'Usuário cadastrado com sucesso',
              'Fechar',
              { duration: 2000 }
            );
          }
        });
    }
  }
}

function passwordConfirming(c: AbstractControl): any {
    if (!c.parent || !c) {
      return { passwordsDifferents: true };
    }

    const pwd = c.parent.get('Password');
    const cpwd = c.parent.get('ConfirmPassword');

    if (!pwd || !cpwd) {
      return { passwordsDifferents: true };
    }

    if (!pwd.value || !cpwd.value) {
      return null;
    }

    if (pwd.value !== cpwd.value) {
        return { passwordsDifferents: true };
    }
}

