import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsContainerComponent} from './products-container/products-container.component';
import {MatTableModule} from "@angular/material/table";
import {TableListModule} from "../../shared/table-list/table-list.module";


@NgModule({
  declarations: [
    ProductsContainerComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    TableListModule
  ],
  exports: [ProductsContainerComponent]
})
export class ProductsModule {
}
