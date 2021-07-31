import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './products-container/products-container.component';
import {ProductsRoutingModule} from "./products-routing.module";
import { ProductsListComponent } from './products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[ProductsContainerComponent]
})
export class ProductsModule { }
