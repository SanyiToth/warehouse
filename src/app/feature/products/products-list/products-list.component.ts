import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {


  @Input() dataSource!: MatTableDataSource<Product>
  @Input() isLoggedIn!: boolean;
  @Output() updatedProduct = new EventEmitter<Product>();
  @Output() deletedProduct = new EventEmitter<number>();

  displayedColumns!: string[];
  dialogRefConfirm!: MatDialogRef<ConfirmDialogComponent> | null;
  dialogRefProduct!: MatDialogRef<ProductDialogComponent> | null;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = ["name", "length", "width", "date", "actions"];
  }


  openDeleteDialog(element: Product) {
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


  openEditDialog(element: Product) {
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
