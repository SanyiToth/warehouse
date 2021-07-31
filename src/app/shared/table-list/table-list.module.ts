import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
    declarations: [
        TableListComponent
    ],
    exports: [
        TableListComponent
    ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class TableListModule { }
