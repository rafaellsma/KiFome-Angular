import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../../shared/models/authentication';
import { UserManagementService } from '../user-management.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  authForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.authForm = this.fb.group({
      Email: [null, Validators.required],
      Password: [null, Validators.required]
    });
  }

  authenticate() {
    if (this.authForm.valid) {
      const auth = <Authentication>this.authForm.value;
      this.auth.login(auth)
        .subscribe(
          () => {
            this.snackBar.open('Usuário logado com sucesso', 'Fechar', {
              duration: 3000
            });
            this.router.navigateByUrl('perfil');
          }
        );
    }
  }
}
