import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";
import {Store} from "../../stores/store.interface";
import {AuthService} from "../../../shared/auth/auth.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";
import {StoreDialogComponent} from "../../stores/store-dialog/store-dialog.component";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products!: any;
  @Output() DataToParent = new EventEmitter();
  displayedColumns!: string[];
  deletedElement!: Product | Store;
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
    this.DataToParent.emit(this.deletedElement);
  }
}
