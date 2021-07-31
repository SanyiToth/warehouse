import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from "./core-routing.module";
import {CoreComponent} from "./core/core.component";
import {NotFoundComponent} from './not-found/not-found.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HeaderModule} from "../shared/header/header.module";


@NgModule({
  declarations: [
    NotFoundComponent,
    CoreComponent

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CoreRoutingModule,
    HeaderModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
}
