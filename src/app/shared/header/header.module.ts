import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatListModule,
        RouterModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatTooltipModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
