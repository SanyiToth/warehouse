import {Component, OnInit} from '@angular/core';
import {StoresService} from "../../../shared/services/stores/stores.service";
import {Store} from "../store.interface";

@Component({
  selector: 'app-store-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  stores: Store[] = [];

  constructor(private storesService: StoresService) {
  }

  ngOnInit(): void {
    this.storesService.getStores()
      .subscribe(resp => {
        this.stores = resp;
        console.log("resp", this.stores)
      }, error => {
      })
  }

}
