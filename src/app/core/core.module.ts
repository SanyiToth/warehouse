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
import {ReactiveFormsModule} from "@angular/forms";


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
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    FlexLayoutModule,
    CoreRoutingModule,
    HeaderModule,
    ProductsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
}
