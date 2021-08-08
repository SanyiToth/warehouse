import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products/products.service";
import {switchMap} from "rxjs/operators";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../shared/auth/auth.service";
import {NotificationService} from "../../../shared/services/notification/notification.service";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit, AfterViewInit {

  dialogRefProduct!: MatDialogRef<ProductDialogComponent, Product>;
  newProduct!: Product;
  allProducts: Product[] = [];
  deletedElementId!: number;
  isLoggedIn!: boolean;
  dataSource!: MatTableDataSource<Product>;
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
      .subscribe(productDialogValues => {
        if (productDialogValues) {
          this.newProduct = productDialogValues;
          this.newProduct.date = new Date().toISOString();
          this.productsService
            .saveProduct(this.newProduct)
            .subscribe(newProduct => {
              this.dataSource = new MatTableDataSource([...this.allProducts, newProduct]);
              this.dataSource.paginator = this.paginator;
              this.dataSource.filter = this.filterValue;
              this.dataSource._updateChangeSubscription();
              this.notification.open('Saved successfully!');
            }, () => {
              this.notification.open('Oooops!Something happened!Try again later!');
            });
        }
      })
  }

  applyEditOrDelete($event: Product | number) {
    if (typeof $event === 'number') {
      this.deletedElementId = $event;
      this.productsService
        .deleteProduct(this.deletedElementId)
        .pipe(
          switchMap(() => this.productsService.getProducts()))
        .subscribe(products => {
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.filter = this.filterValue;
          this.dataSource._updateChangeSubscription();

        }, () => {
          this.notification.open('Can not load the list!')
        });
    } else {
      this.productsService
        .updateProduct($event, $event.id)
        .pipe(
          switchMap(() => this.productsService.getProducts()))
        .subscribe(products => {
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.paginator = this.paginator;
          this.dataSource.filter = this.filterValue;
          this.dataSource._updateChangeSubscription();
        }, () => {
          this.notification.open('Can not load the list!')
        });
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue;
  }
}
