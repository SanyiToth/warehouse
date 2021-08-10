import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {Product} from "../product.interface";

@Component({
  selector: 'products-add-new',
  templateUrl: './products-add-new.component.html',
  styleUrls: ['./products-add-new.component.scss']
})
export class ProductsAddNewComponent {

  @Input() isLoggedIn!: boolean;
  @Output() dialogValue = new EventEmitter<Product>();

  dialogRefProduct!: MatDialogRef<ProductDialogComponent, Product> | null;

  constructor(private dialog: MatDialog) {
  }

  openAddNewDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialogRefProduct = this.dialog.open(ProductDialogComponent, dialogConfig);
    this.dialogRefProduct
      .afterClosed()
      .subscribe(productDialogValues => {
        if (productDialogValues) {
          productDialogValues.date = new Date().toISOString();
          this.dialogValue.emit(productDialogValues);
        }
      });
  }
}
