import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresContainerComponent } from './stores-container/stores-container.component';
import { StoresRoutingModule } from './stores-routing.module';
import {MatTableModule} from "@angular/material/table";
import {TableListModule} from "../../shared/table-list/table-list.module";
import {HeaderModule} from "../../shared/header/header.module";



@NgModule({
  declarations: [
    StoresContainerComponent,
  ],
    imports: [
        CommonModule,
        StoresRoutingModule,
        MatTableModule,
        TableListModule,
        HeaderModule
    ]
})
export class StoresModule { }
