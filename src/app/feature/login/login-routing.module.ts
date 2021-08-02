import {NgModule} from '@angular/core';

import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AuthGuard} from "../../shared/auth/auth.guard";


const routes: Routes = [
  {path: '', canActivate: [AuthGuard], component: LoginComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
