import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../../feature/products/product.interface";
import {AuthService} from "../auth/auth.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {ProductDialogComponent} from "../../feature/products/product-dialog/product-dialog.component";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  dialogRefConfirm!: MatDialogRef<ConfirmDialogComponent> | null;
  dialogRefProduct!: MatDialogRef<ProductDialogComponent> | null;

  @Input() element!: any;
  @Output() deletedElement = new EventEmitter<Product>();

  isLoggedIn!: boolean;

  activatedRoutePath: string | undefined = this.route.routeConfig?.path;


  constructor(private auth: AuthService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
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
