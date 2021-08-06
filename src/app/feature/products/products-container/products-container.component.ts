import {Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products/products.service";
import {switchMap} from "rxjs/operators";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {AuthService} from "../../../shared/auth/auth.service";
import {NotificationService} from "../../../shared/services/notification/notification.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  dialogRefProduct!: MatDialogRef<ProductDialogComponent, Product>;

  newProduct!: Product;
  products: Product[] = [];

  deletedElement!: Product;


  isLoggedIn!: boolean;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private auth: AuthService,
              private dialog: MatDialog,
              private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
    this.isLoggedIn = this.auth.isLoggedIn();
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
              this.products = [...this.products, newProduct]
              this.notification.open('Saved successfully!')
            });
        }
      })
  }


  getDeletedElement($event: Product) {
    this.deletedElement = $event;
    this.productsService.deleteProduct(this.deletedElement.id)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
          this.products = products;
        }, errorMsg => {

        }
      )
  }

}
