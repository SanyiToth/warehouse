import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmDialogComponent } from './confirm-dialog.component';


@NgModule({
  declarations: [ ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: []
})
export class ConfirmDialogModule {
}
