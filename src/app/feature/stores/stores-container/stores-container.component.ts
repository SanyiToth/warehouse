import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "../store.interface";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {StoreDialogComponent} from "../store-dialog/store-dialog.component";
import {switchMap} from "rxjs/operators";
import {StoresService} from "../../../shared/services/stores/stores.service";
import {NotificationService} from "../../../shared/services/notification/notification.service";

@Component({
  selector: 'app-stores-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  allStores!: Store[];
  dataSource!: MatTableDataSource<Store>;
  dialogRefStore!: MatDialogRef<StoreDialogComponent, Store> | null;

  isLoggedIn!: boolean;
  filterValue!: string;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private storesService: StoresService,
              private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.allStores = this.route.snapshot.data.stores;
    this.dataSource = new MatTableDataSource(this.allStores);
  }

  applyLoggedInStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  openAddNewDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    this.dialogRefStore = this.dialog.open(StoreDialogComponent, dialogConfig);
    this.dialogRefStore
      .afterClosed()
      .subscribe(storeDialogValues => {
        if (storeDialogValues) {
          storeDialogValues.id = StoresContainerComponent.generateStoreId(6);
          this.onAdd(storeDialogValues);
        }
      });
  }


  private static generateStoreId(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }


  private updateStoresDataSource(stores: Store[]) {
    this.dataSource = new MatTableDataSource(stores);
    /*    this.dataSource.paginator = this.paginator;
        this.dataSource.filter = this.filterValue;*/
    this.dataSource._updateChangeSubscription();
  }

  onAdd(newStore: Store) {
    this.storesService
      .saveStore(newStore)
      .pipe(
        switchMap(() => this.storesService.getStores()))
      .subscribe(stores => {
        this.allStores = stores;
        this.updateStoresDataSource(this.allStores);
        this.notification.open('Saved successfully!');
      }, () => {
        this.notification.open('Can not save this item! Try again later!')
      });
  }

  onEdit(store: Store) {
    this.storesService.updateStore(store, store.id)
      .pipe(
        switchMap(() => this.storesService.getStores()))
      .subscribe(stores => {
        this.allStores = stores;
        this.updateStoresDataSource(this.allStores);
        this.notification.open('Edited successfully!');
      }, () => {
        this.notification.open('Can not edit this item! Try again later!')
      });
  }

  onDelete(storeId: string) {
    this.storesService.deleteStore(storeId)
      .pipe(
        switchMap(() => this.storesService.getStores()))
      .subscribe(stores => {
        this.allStores = stores;
        this.updateStoresDataSource(this.allStores);
        this.notification.open('Deleted successfully!');
      }, () => {
        this.notification.open('Can not delete this item! Try again later!')
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.filterValue = filterValue;
    this.dataSource.filter = filterValue;
  }
}
