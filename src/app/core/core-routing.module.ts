import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "../feature/login/login.component";
import {ProductsContainerComponent} from "../feature/products/products-container/products-container.component";
import {ProductsResolver} from "../shared/resolvers/products/products.resolver";
import {StoresResolver} from "../shared/resolvers/stores/stores.resolver";

const routes: Routes = [
  {path: '', resolve: {products: ProductsResolver}, component: ProductsContainerComponent},
  {
    path: 'stores',
    resolve: {stores: StoresResolver},
    loadChildren: () => import('../feature/stores/stores.module').then(m => m.StoresModule)
  },
  {path: 'login', component: LoginComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class CoreRoutingModule {
}
