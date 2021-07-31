import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import {HeaderModule} from "../../shared/header/header.module";



@NgModule({
  declarations: [
    LandingContainerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class LandingModule { }
