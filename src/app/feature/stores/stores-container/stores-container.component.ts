import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "../store.interface";

@Component({
  selector: 'app-stores-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  allStores!: Store[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allStores = this.route.snapshot.data.stores;
  }

}
