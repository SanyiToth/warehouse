import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../feature/products/product.interface";
import {Store} from "../../feature/stores/store.interface";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data!: Product[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
