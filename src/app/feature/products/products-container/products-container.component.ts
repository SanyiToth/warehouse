import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products/products.service";
import { switchMap, tap} from "rxjs/operators";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../shared/auth/auth.service";
import {NotificationService} from "../../../shared/services/notification/notification.service";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, AfterViewInit {

  dialogRefProduct!: MatDialogRef<ProductDialogComponent, Product>;
  dataSource!: MatTableDataSource<Product>;
  newProduct!: Product;
  allProducts!: Product[];
  deletedElementId!: number;
  isLoggedIn!: boolean;
  filterValue!: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private auth: AuthService,
              private dialog: MatDialog,
              private notification: NotificationService) {

  }


  ngOnInit(): void {
    this.allProducts = this.route.snapshot.data.products;
    this.isLoggedIn = this.auth.isLoggedIn();
    this.dataSource = new MatTableDataSource(this.allProducts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAddNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialogRefProduct = this.dialog.open(ProductDialogComponent, dialogConfig);
    this.dialogRefProduct.afterClosed()
      .pipe(
        tap(dialogValues => {
            if (dialogValues) {
              this.newProduct = dialogValues;
              this.newProduct.date = new Date()
                .toISOString();
            }
          }
        ),
        switchMap(() => this.productsService.saveProduct(this.newProduct)))
      .subscribe(newProduct => {
        this.allProducts = [...this.allProducts, newProduct];
        this.updateDataSource(this.allProducts);
        this.notification.open('Saved successfully!');
      }, () => {
        this.notification.open('Can not save this item! Try again later!')
      });

  }


  onDelete(productId: number) {
    this.deletedElementId = productId;
    this.productsService
      .deleteProduct(this.deletedElementId)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
        this.allProducts = products;
        this.updateDataSource(this.allProducts);
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
        this.updateDataSource(this.allProducts);
        this.notification.open('Edited successfully!');
      }, () => {
        this.notification.open('Can not edit this item! Try again later!')
      });
  }

  private updateDataSource(products: Product[]) {
    this.dataSource = new MatTableDataSource(products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.filter = this.filterValue;
    this.dataSource._updateChangeSubscription();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue;
  }
}
