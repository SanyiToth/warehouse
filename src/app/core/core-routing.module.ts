import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ProductsContainerComponent} from "../feature/products/products-container/products-container.component";
import {ProductsResolver} from "../shared/resolvers/products/products.resolver";
import {AuthGuard} from "../shared/auth/auth.guard";
import {StoresResolver} from "../shared/resolvers/stores/stores.resolver";
import {StoresContainerComponent} from "../feature/stores/stores-container/stores-container.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'products',
    resolve: {products: ProductsResolver},
    component: ProductsContainerComponent
  },
  {
    path: 'stores',
    resolve: {stores: StoresResolver, products: ProductsResolver},
    component: StoresContainerComponent
  },
  {
    path: 'login',
    canLoad: [AuthGuard],
    loadChildren: () => import('../feature/login/login.module').then(m => m.LoginModule)
  },
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
