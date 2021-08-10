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
  @Input() dataSource!: MatTableDataSource<Store>
  displayedColumns!: string[];
  @Input() isLoggedIn!: boolean;
  @Output() updatedStore = new EventEmitter<Store>();

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

  }

}
