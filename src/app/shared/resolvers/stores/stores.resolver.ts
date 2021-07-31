import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from "../../../feature/stores/store.interface";
import {StoresService} from "../../services/stores/stores.service";

@Injectable({
  providedIn: 'root'
})
export class StoresResolver implements Resolve<Store[]> {

  constructor(private storesService: StoresService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Store[]> {
    return this.storesService.getStores();
  }
}
