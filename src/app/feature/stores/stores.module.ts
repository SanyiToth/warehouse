import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import {HeaderModule} from "../../shared/header/header.module";
import { StoresListComponent } from './stores-list/stores-list.component';



@NgModule({
  declarations: [
    StoresContainerComponent,
    StoresListComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class StoresModule { }
