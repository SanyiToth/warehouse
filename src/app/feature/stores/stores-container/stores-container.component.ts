import {Component, OnInit} from '@angular/core';
import {StoresService} from "../../../shared/services/stores/stores.service";
import {Store} from "../store.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-store-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  stores: Store[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.stores = this.route.snapshot.data.stores;
    console.log('stores', this.stores)
  }
}
