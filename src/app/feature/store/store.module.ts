import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoresListComponent } from './stores-list/stores-list.component';



@NgModule({
  declarations: [
    StoresContainerComponent,
    StoresListComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
