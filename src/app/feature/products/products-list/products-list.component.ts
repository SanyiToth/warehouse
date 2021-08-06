import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../product.interface";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {



  @Input() products!: Product[];
  @Output() dataToParent = new EventEmitter();
  displayedColumns!: string[];



  constructor() {
  }

  ngOnInit(): void {

    this.displayedColumns = ["name", "width", "length", "date", "actions",];

  }

  getDeletedElement($event: Product) {
    this.dataToParent.emit($event);
  }
}
