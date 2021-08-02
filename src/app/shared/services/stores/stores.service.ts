import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Store} from "../../../feature/stores/store.interface";
import {Product} from "../products/product.interface";


@Injectable({
  providedIn: 'root'
})
export class StoresService {

  static PATH = "/stores";

  constructor(private http: HttpClient) {
  }

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(environment.API_URL + StoresService.PATH);
  }

  deleteStore(id: number | undefined): Observable<Product[]> {
    return this.http.delete<Product[]>(environment.API_URL + StoresService.PATH + `/${id}`);
  }
}
