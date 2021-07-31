import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  static PATH = "/store";

  constructor(private http: HttpClient) {
  }

  getStore(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + StoreService.PATH);
  }
}
