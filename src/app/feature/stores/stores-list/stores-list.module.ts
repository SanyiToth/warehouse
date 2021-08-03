import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoresListComponent} from './stores-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ContextMenuModule} from "../../../shared/context-menu/context-menu.module";


@NgModule({
  declarations: [
    StoresListComponent
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    ContextMenuModule
  ],
  exports: [
    StoresListComponent
  ],
})
export class StoresListModule {
}
