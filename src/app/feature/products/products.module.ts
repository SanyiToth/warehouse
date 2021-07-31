import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsContainerComponent} from './products-container/products-container.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {MatTableModule} from "@angular/material/table";
import {TableListModule} from "../../shared/table-list/table-list.module";


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TableListModule
  ],
  exports: [ProductsContainerComponent, ProductsListComponent]
})
export class ProductsModule {
}
