import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {CoreComponent} from "./core/core.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HeaderModule} from "../shared/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "../feature/products/products.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "../shared/auth/auth.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {StoresModule} from "../feature/stores/stores.module";


@NgModule({
  declarations: [
    NotFoundComponent,
    CoreComponent

  ],
  imports: [
    CommonModule,
    AuthModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule,
    FlexLayoutModule,
    ProductsModule,
    StoresModule,
    CoreRoutingModule

  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
}
