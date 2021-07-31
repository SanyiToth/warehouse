import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import { StoreRoutingModule } from './store-routing.module';



@NgModule({
  declarations: [
    StoresContainerComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
