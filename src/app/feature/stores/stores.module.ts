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
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilterModule} from "../../shared/filter/filter.module";



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
    MatButtonModule,
    FilterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class StoresModule { }
