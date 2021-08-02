import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDialogComponent} from "./store-dialog/store-dialog.component";
import {MatButtonModule} from "@angular/material/button";
import { ProductDialogComponent } from './product-dialog/product-dialog.component';



@NgModule({
  declarations: [StoreDialogComponent, ProductDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class DialogModule {
}
