import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import {HeaderModule} from "../../shared/header/header.module";
import { StoresListComponent } from './stores-list/stores-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { StoreDialogComponent } from './store-dialog/store-dialog.component';



@NgModule({
  declarations: [
    StoresContainerComponent,
    StoresListComponent,
    StoreDialogComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class StoresModule { }
