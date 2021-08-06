import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {AuthService} from "../../../shared/auth/auth.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  @Input() products!: Product[];
  @Output() dataToParent = new EventEmitter();
  displayedColumns!: string[];
  isLoggedIn!: boolean;

  dialogRefConfirm!: MatDialogRef<ConfirmDialogComponent> | null;
  dialogRefProduct!: MatDialogRef<ProductDialogComponent> | null;

  constructor(private auth: AuthService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.displayedColumns = ["name", "width", "length", "date", "actions"];
    this.isLoggedIn = this.auth.isLoggedIn();

  }

  getDeletedElement($event: Product) {
    this.dataToParent.emit($event);
  }


  onDelete(element: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: element
    };
    this.dialogRefConfirm = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    this.dialogRefConfirm.afterClosed()
      .subscribe(confirmDialogValue => {
        if (confirmDialogValue) this.dataToParent.emit(element.id);
        this.dialogRefConfirm = null;
      });
  }


  onEdit(element: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: element
    };
    this.dialogRefProduct = this.dialog.open(ProductDialogComponent, dialogConfig);
    this.dialogRefProduct.afterClosed()
      .subscribe(productDialogValues => {
        if (productDialogValues) {
          let newProduct: Product = productDialogValues;
          newProduct.id = element.id;
          this.dataToParent.emit(newProduct);
        }
        this.dialogRefProduct = null;
      });

  }

}
