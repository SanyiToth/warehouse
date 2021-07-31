import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsContainerComponent} from './products-container/products-container.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [ProductsContainerComponent, ProductsListComponent]
})
export class ProductsModule {
}
