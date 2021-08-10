import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Store} from "../store.interface";

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.scss']
})
export class StoresListComponent implements OnInit {
  @Input() dataSource!: MatTableDataSource<Store>
  displayedColumns!: string[];
  isLoggedIn!: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = ["storeId", "address", "length", "width", "actions"];
  }

  openEditDialog(element: Store) {

  }

  openDeleteDialog(element: Store) {

  }

}
