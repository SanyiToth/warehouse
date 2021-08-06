import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {AuthService} from "../../../shared/auth/auth.service";
import {ActivatedRoute} from "@angular/router";

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

  ngOnInit(): void {

    this.displayedColumns = ["name", "width", "length", "date", "actions"];
    this.isLoggedIn = this.auth.isLoggedIn();

  }

  getDeletedElement($event: Product) {
    this.dataToParent.emit($event);
  }

  dialogRefConfirm!: MatDialogRef<ConfirmDialogComponent> | null;
  dialogRefProduct!: MatDialogRef<ProductDialogComponent> | null;

  @Input() element!: any;
  @Output() deletedElement = new EventEmitter<Product>();


  activatedRoutePath: string | undefined = this.route.routeConfig?.path;


  constructor(private auth: AuthService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }


  onDelete() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: this.element
    };
    this.dialogRefConfirm = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    this.dialogRefConfirm.afterClosed()
      .subscribe(resp => {
        console.log('resp', resp)
        if (resp) this.deletedElement.emit(this.element);
        this.dialogRefConfirm = null;
      });
  }


  onEdit() {
    /*    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.data = {
          element: this.element
        };
        this.dialogRefProduct = this.dialog.open(ProductDialogComponent, dialogConfig);
        this.dialogRefProduct.afterClosed()
          .subscribe(resp => {
            this.dialogRefProduct = null;
          });*/

  }

}
