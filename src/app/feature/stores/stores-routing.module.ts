import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StoresContainerComponent} from "./stores-container/stores-container.component";

const routes: Routes = [
  {path: '', component: StoresContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
