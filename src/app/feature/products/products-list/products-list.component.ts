import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {AuthService} from "../../../shared/auth/auth.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {


  @Input() dataSource!: MatTableDataSource<Product>
  @Output() updatedProduct = new EventEmitter<Product>();
  @Output() deletedProduct = new EventEmitter<number>();
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
    this.updatedProduct.emit($event);
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
        if (confirmDialogValue) this.deletedProduct.emit(element.id);
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
          this.updatedProduct.emit(newProduct);
        }
        this.dialogRefProduct = null;
      });

  }

}
