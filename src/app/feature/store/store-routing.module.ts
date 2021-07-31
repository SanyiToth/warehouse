import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StoreContainerComponent} from "./store-container/store-container.component";

const routes: Routes = [
  {path: '', component: StoreContainerComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
