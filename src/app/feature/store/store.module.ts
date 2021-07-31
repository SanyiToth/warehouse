import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreContainerComponent } from './store-container/store-container.component';
import { StoreRoutingModule } from './store-routing.module';



@NgModule({
  declarations: [
    StoreContainerComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
