import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoresContainerComponent} from './stores-container/stores-container.component';
import {StoresRoutingModule} from './stores-routing.module';
import {MatTableModule} from "@angular/material/table";
import {StoresListModule} from "./stores-list/stores-list.module";
import {HeaderModule} from "../../shared/header/header.module";
import {ConfirmDialogModule} from "../../shared/confirm-dialog/confirm-dialog.module";


@NgModule({
  declarations: [
    StoresContainerComponent,
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    StoresRoutingModule,
    MatTableModule,
    StoresListModule,
    HeaderModule
  ]
})
export class StoresModule {
}
