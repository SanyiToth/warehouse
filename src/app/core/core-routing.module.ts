import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LoginComponent} from "../feature/login/login.component";
import {ProductsContainerComponent} from "../feature/products/products-container/products-container.component";

const routes: Routes = [
  {path: '', component: ProductsContainerComponent},
  {path: 'stores', loadChildren: () => import('../feature/stores/stores.module').then(m => m.StoresModule)},
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
