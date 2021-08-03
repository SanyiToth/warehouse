import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "../store.interface";
import {Product} from "../../../shared/services/products/product.interface";
import {AuthService} from "../../../shared/auth/auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {StoreDialogComponent} from "../store-dialog/store-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {ProductDialogComponent} from "../../products/product-dialog/product-dialog.component";


@Component({
  selector: 'app-table-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {


  @Input() data!: any;
  @Output() deletedElementToParent = new EventEmitter<Product | Store>();
  displayedColumns!: string[];
  deletedElement!: Product | Store;
  isLoggedIn!: boolean;

  constructor(private auth: AuthService,
              private dialog: MatDialog,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.displayedColumns = [...Object.keys(this.data[0]), "actions"];

  }

  onAddNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    if (this.route.routeConfig?.path === 'products') {
      this.dialog.open(ProductDialogComponent, dialogConfig);
      this.dialog.afterAllClosed.subscribe(resp => {


        }
      )
    } else {
      this.dialog.open(StoreDialogComponent, dialogConfig);
    }
  }

  getDeletedElement($event: any) {
    this.deletedElement = $event;
    this.deletedElementToParent.emit(this.deletedElement);
  }
}
