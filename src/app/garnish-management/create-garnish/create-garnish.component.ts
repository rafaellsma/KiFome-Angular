import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Garnish } from '../models/garnish.model';
import { GarnishService } from '../garnish.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-garnish',
  templateUrl: './create-garnish.component.html',
  styleUrls: ['./create-garnish.component.css']
})
export class CreateGarnishComponent implements OnInit {

  garnishForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateGarnishComponent>,
    private fb: FormBuilder,
    private garnishService: GarnishService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.garnishForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    const garnish = this.garnishForm.value;
    this.garnishService.createGarnish(garnish)
      .subscribe(() => this.dialogRef.close());
  }
}
