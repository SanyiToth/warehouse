import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        TableListComponent
    ],
    exports: [
        TableListComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,

  ]
})
export class TableListModule { }
