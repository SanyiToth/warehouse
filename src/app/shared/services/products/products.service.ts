import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment.prod";
import {Product} from "../../../feature/products/product.interface";
import {PageEvent} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  static PATH = "/products";

  constructor(private http: HttpClient) {
  }

  getProducts(searchedName?: string, pageEvent?: PageEvent): Observable<Product[]> {
    if (searchedName) {
      return this.http.get<Product[]>(environment.API_URL + ProductsService.PATH + `?name_like=${searchedName}`);
    } else if (pageEvent) {
      console.log('path',`?_page=${pageEvent.pageIndex+1}&_limit=${pageEvent.pageSize}`, pageEvent);
      return this.http.get<Product[]>(environment.API_URL + ProductsService.PATH+ `?_page=${pageEvent.pageIndex+1}&_limit=${pageEvent.pageSize}`);
    } else {
      return this.http.get<Product[]>(environment.API_URL + ProductsService.PATH);
    }
  }

  getProductsAfterPageEvent(pageEvent?: PageEvent): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL + ProductsService.PATH);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.API_URL + ProductsService.PATH, product);
  }

  deleteProduct(id: number | undefined): Observable<Product[]> {
    return this.http.delete<Product[]>(environment.API_URL + ProductsService.PATH + `/${id}`);
  }

  updateProduct(updatedProduct: Product, id: number | undefined): Observable<Product> {
    return this.http.patch<Product>(environment.API_URL + ProductsService.PATH + `/${id}`, updatedProduct);
  }

}
