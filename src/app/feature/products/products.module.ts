import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './products-container/products-container.component';
import {ProductsRoutingModule} from "./products-routing.module";



@NgModule({
  declarations: [
    ProductsContainerComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[ProductsContainerComponent]
})
export class ProductsModule { }
