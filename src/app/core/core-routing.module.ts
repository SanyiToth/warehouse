import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingContainerComponent} from "../feature/landing/landing-container/landing-container.component";
import {LoginComponent} from "../feature/login/login.component";

const routes: Routes = [
  {path: '', component: LandingContainerComponent},
  {path: 'products', loadChildren: () => import('../feature/products/products.module').then(m => m.ProductsModule)},
  {path: 'store', loadChildren: () => import('../feature/store/store.module').then(m => m.StoreModule)},
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
