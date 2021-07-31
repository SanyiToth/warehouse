import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import { StoreRoutingModule } from './store-routing.module';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    StoresContainerComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatTableModule
  ]
})
export class StoreModule { }
