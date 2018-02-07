import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule { }
