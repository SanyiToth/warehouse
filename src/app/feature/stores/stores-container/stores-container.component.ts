import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "../store.interface";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-stores-container',
  templateUrl: './stores-container.component.html',
  styleUrls: ['./stores-container.component.css']
})
export class StoresContainerComponent implements OnInit {
  allStores!: Store[];
  dataSource!: MatTableDataSource<Store>;
  isLoggedIn!: boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allStores = this.route.snapshot.data.stores;
    this.dataSource = new MatTableDataSource(this.allStores);
  }

  applyLoggedInStatus(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }
}
