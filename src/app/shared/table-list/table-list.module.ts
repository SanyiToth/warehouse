import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableListComponent} from './table-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ContextMenuModule} from "../context-menu/context-menu.module";


@NgModule({
  declarations: [
    TableListComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    ContextMenuModule
  ],
  exports: [
    TableListComponent
  ],
})
export class TableListModule {
}
