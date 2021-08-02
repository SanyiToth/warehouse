import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDialogComponent} from "./store-dialog/store-dialog.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [StoreDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class DialogModule {
}
