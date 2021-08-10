import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Store} from "../../../feature/stores/store.interface";


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

  deleteStore(id: number | undefined): Observable<Store[]> {
    return this.http.delete<Store[]>(environment.API_URL + StoresService.PATH + `/${id}`);
  }

  saveStore(newStore: Store): Observable<Store> {
    return this.http.post<Store>(environment.API_URL + StoresService.PATH, newStore);
  }

  patchStore(store: Store, id: number): Observable<Store> {
    return this.http.patch<Store>(environment.API_URL + StoresService.PATH + `/${id}`, store);
  }


}
