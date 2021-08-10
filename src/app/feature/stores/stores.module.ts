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
import {PaginatorModule} from "../../shared/paginator/paginator.module";
import {MatCardModule} from "@angular/material/card";
import { StoresSizeCalculatorComponent } from './stores-size-calculator/stores-size-calculator.component';



@NgModule({
  declarations: [
    StoresContainerComponent,
    StoresListComponent,
    StoreDialogComponent,
    StoresSizeCalculatorComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FilterModule,
    PaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class StoresModule { }
