import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products/products.service";
import {switchMap} from "rxjs/operators";
import {NotificationService} from "../../../shared/services/notification/notification.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, AfterViewInit {


  dataSource!: MatTableDataSource<Product>;
  allProducts!: Product[];
  isLoggedIn!: boolean;
  filterValue!: string;
  paginator!: MatPaginator;


  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private notification: NotificationService) {

  }


  ngOnInit(): void {
    this.allProducts = this.route.snapshot.data.products;
    this.dataSource = new MatTableDataSource(this.allProducts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  onAdd(newProduct: Product) {
    this.productsService
      .saveProduct(newProduct)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
        this.allProducts = products;
        this.updateProductsDataSource(this.allProducts);
        this.notification.open('Saved successfully!');
      }, () => {
        this.notification.open('Can not save this item! Try again later!')
      });
  }

  onDelete(productId: number) {
    this.productsService
      .deleteProduct(productId)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
        this.allProducts = products;
        this.updateProductsDataSource(this.allProducts);
        this.notification.open('Deleted successfully!');
      }, () => {
        this.notification.open('Can not delete this item! Try again later!')
      });
  }

  onEdit(product: Product) {
    this.productsService
      .updateProduct(product, product.id)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
        this.allProducts = products;
        this.updateProductsDataSource(this.allProducts);
        this.notification.open('Edited successfully!');
      }, () => {
        this.notification.open('Can not edit this item! Try again later!')
      });
  }

  private updateProductsDataSource(products: Product[]) {
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.filter = this.filterValue;
    this.dataSource._updateChangeSubscription();
  }


  applyPaginator(paginator: MatPaginator) {
    this.paginator = paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue;
  }

  applyLoggedInStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
