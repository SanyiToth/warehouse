import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Store} from "../../../feature/store/store.interface";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  static PATH = "/store";

  constructor(private http: HttpClient) {
  }

  getStore(): Observable<Store[]> {
    return this.http.get<Store[]>(environment.API_URL + StoreService.PATH);
  }
}
