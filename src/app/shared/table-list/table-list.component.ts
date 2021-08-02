import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "../../feature/stores/store.interface";
import {Product} from "../../feature/products/product.interface";
import {AuthService} from "../auth/auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StoreDialogComponent} from "../dialogs/store-dialog/store-dialog.component";


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data!: any;
  @Output() deletedElementToParent = new EventEmitter<Product | Store>();
  displayedColumns!: string[];
  deletedElement!: Product | Store;
  isLoggedIn!: boolean;

  constructor(private auth: AuthService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.displayedColumns = [...Object.keys(this.data[0]), "actions"];
  }

  onAddNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.maxWidth = "60vw";
    dialogConfig.width = '100%';
    this.dialog.open(StoreDialogComponent, dialogConfig);

  }

  getDeletedElement($event: any) {
    this.deletedElement = $event;
    this.deletedElementToParent.emit(this.deletedElement);
  }
}
