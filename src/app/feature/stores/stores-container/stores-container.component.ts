import {Component, OnInit} from '@angular/core';
import {StoresService} from "../../../shared/services/stores/stores.service";
import {Store} from "../store.interface";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../products/product.interface";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-store-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  stores: Store[] = [];
  private deletedElement: any;

  constructor(private route: ActivatedRoute,
              private storesService: StoresService) {
  }

  ngOnInit(): void {
    this.stores = this.route.snapshot.data.stores;
  }

  getDeletedElement($event: any) {
    this.deletedElement = $event;
    this.storesService.deleteStore(this.deletedElement.id)
      .pipe(
        switchMap(() => this.storesService.getStores()))
      .subscribe(stores => {
          this.stores = stores;
        }, errorMsg => {

        }
      )
  }
}
