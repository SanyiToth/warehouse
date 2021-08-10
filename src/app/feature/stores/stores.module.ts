import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import {HeaderModule} from "../../shared/header/header.module";



@NgModule({
  declarations: [
    StoresContainerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class StoresModule { }
