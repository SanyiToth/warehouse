import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {StoreDialogComponent} from "../store-dialog/store-dialog.component";
import { Store } from '../store.interface';
import {StoresContainerComponent} from "../stores-container/stores-container.component";


@Component({
  selector: 'app-stores-add-new',
  templateUrl: './stores-add-new.component.html',
  styleUrls: ['./stores-add-new.component.css']
})
export class StoresAddNewComponent {

  @Input() isLoggedIn!: boolean;
  @Output() dialogValue = new EventEmitter<Store>();

  dialogRefStore!: MatDialogRef<StoreDialogComponent, Store> | null;

  constructor(private dialog: MatDialog) {
  }

  openAddNewDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialogRefStore = this.dialog?.open(StoreDialogComponent, dialogConfig);
    this.dialogRefStore?.afterClosed()?.subscribe(storeDialogValues => {
      if (storeDialogValues) {
        storeDialogValues.id = StoresContainerComponent?.generateStoreId(6);
        this.dialogValue.emit(storeDialogValues);
      }
    });
  }


}
