import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "../../feature/stores/store.interface";
import {Product} from "../../feature/products/product.interface";


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  @Input() data!: any;
  @Output() deletedElementToParent = new EventEmitter<Product | Store>();
  displayedColumns!: string[];
  deletedElement!: Product | Store;

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = [...Object.keys(this.data[0]), "actions"];
  }

  onAddNew() {

  }

  getDeletedElement($event: any) {
    this.deletedElement = $event;
    this.deletedElementToParent.emit(this.deletedElement);
  }
}
