import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsContainerComponent} from "./products-container/products-container.component";

const routes: Routes = [
  {path: '', component: ProductsContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
