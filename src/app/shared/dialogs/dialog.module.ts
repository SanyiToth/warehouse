import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDialogComponent} from "./store-dialog/store-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [StoreDialogComponent, ProductDialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [StoreDialogComponent, ProductDialogComponent]
})
export class DialogModule {
}
