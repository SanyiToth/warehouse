import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Product} from "../../../feature/products/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  static PATH = "/products";

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL + ProductsService.PATH);
  }

  deleteProduct(id: number | undefined): Observable<Product[]> {
    return this.http.delete<Product[]>(environment.API_URL + ProductsService.PATH + `/${id}`);
  }
}
