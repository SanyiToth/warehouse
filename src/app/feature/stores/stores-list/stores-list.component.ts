import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Store} from "../store.interface";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../shared/confirm-dialog/confirm-dialog.component";
import {StoreDialogComponent} from "../store-dialog/store-dialog.component";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {

  displayedColumns!: string[];

  @Input() dataSource!: MatTableDataSource<Store>
  @Input() isLoggedIn!: boolean;
  @Output() updatedStore = new EventEmitter<Store>();
  @Output() deletedStore = new EventEmitter<string>();
  dialogRefConfirm!: MatDialogRef<ConfirmDialogComponent> | null;
  dialogRefStore!: MatDialogRef<StoreDialogComponent> | null;


  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayedColumns = ["id", "address", "length", "width", "actions"];
  }

  openEditDialog(element: Store) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: element
    };
    this.dialogRefStore = this.dialog.open(StoreDialogComponent, dialogConfig);
    this.dialogRefStore.afterClosed()
      .subscribe(storeDialogValues => {
        if (storeDialogValues) {
          storeDialogValues.id = element.id;
          this.updatedStore.emit(storeDialogValues);
        }
        this.dialogRefStore = null;
      });
  }


  openDeleteDialog(element: Store) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = {
      element: element
    };
    this.dialogRefConfirm = this.dialog.open(ConfirmDialogComponent, dialogConfig);
    this.dialogRefConfirm.afterClosed()
      .subscribe(confirmDialogValue => {
        if (confirmDialogValue) this.deletedStore.emit(element.id);
        this.dialogRefConfirm = null;
      });


  }

}
