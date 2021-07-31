import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  static PATH = "/products";

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + ProductsService.PATH);
  }
}
