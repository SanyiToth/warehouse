import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsContainerComponent} from './products-container/products-container.component';
import {MatTableModule} from "@angular/material/table";
import {TableListModule} from "../../shared/table-list/table-list.module";
import {HeaderModule} from "../../shared/header/header.module";
import { ProductsListComponent } from './products-list/products-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ContextMenuModule} from "../../shared/context-menu/context-menu.module";


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TableListModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    ContextMenuModule
  ],
  exports: [ProductsContainerComponent]
})
export class ProductsModule {
}
