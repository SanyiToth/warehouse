import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {AuthService} from "../../../shared/auth/auth.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";

import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  dialogRefProduct!: MatDialogRef<ConfirmDialogComponent, null>;

  @Input() products!: Product[];
  @Output() DataToParent = new EventEmitter();
  displayedColumns!: string[];
  deletedElement!: Product;
  isLoggedIn!: boolean;



  constructor(private auth: AuthService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.displayedColumns = ["name", "width", "length", "date", "actions",];

  }

  onAddNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: 1
    }
    this.dialogRefProduct = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    this.dialogRefProduct.afterClosed()
      .subscribe(resp => {
        console.log('resp', resp)
      });
  }

  getDeletedElement($event: Product) {
    this.deletedElement = $event;
    this.DataToParent.emit(this.deletedElement);
  }
}
