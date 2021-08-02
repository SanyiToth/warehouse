import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../services/products/product.interface";
import {Store} from "../../feature/stores/store.interface";
import {AuthService} from "../auth/auth.service";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {StoreDialogComponent} from "../dialogs/store-dialog/store-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {ProductDialogComponent} from "../dialogs/product-dialog/product-dialog.component";
import {ConfirmDialogComponent} from "../dialogs/confirm-dialog/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {


  @Input() element!: any;
  @Output() deletedElement = new EventEmitter<Product | Store>();
  isLoggedIn!: boolean;
  dialogRef!: MatDialogRef<ConfirmDialogComponent> | null;
  activatedRoutePath: string | undefined = this.route.routeConfig?.path;

  constructor(private auth: AuthService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  onDelete() {
    console.log('element', this.element)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: this.element
    };
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig);

    this.dialogRef.afterClosed()
      .subscribe(resp => {
        if (resp) this.deletedElement.emit(this.element);
        this.dialogRef = null;
      });
  }


  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.maxWidth = "60vw";
    dialogConfig.width = 'auto';
    dialogConfig.data = {
      element: this.element
    };
    this.activatedRoutePath === 'products' ?
      this.dialog.open(ProductDialogComponent, dialogConfig) :
      this.dialog.open(StoreDialogComponent, dialogConfig);
  }

}
