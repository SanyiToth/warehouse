import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../../feature/products/product.interface";
import {Store} from "../../feature/stores/store.interface";
import {AuthService} from "../auth/auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StoreDialogComponent} from "../dialogs/store-dialog/store-dialog.component";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @Input() element!: Product | Store;
  @Output() deletedElement = new EventEmitter<Product | Store>();
  isLoggedIn!: boolean;

  constructor(private auth: AuthService,
              private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  onDelete() {
    this.deletedElement.emit(this.element);
  }

  onEdit() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.maxWidth = "60vw";
    dialogConfig.width = '100%';
    dialogConfig.data = {
      element: this.element
    };
    this.dialog.open(StoreDialogComponent, dialogConfig);
  }
}
