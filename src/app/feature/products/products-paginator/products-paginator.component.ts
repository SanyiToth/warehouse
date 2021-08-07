import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../product.interface";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-products-paginator',
  templateUrl: './products-paginator.component.html',
  styleUrls: ['./products-paginator.component.css']
})
export class ProductsPaginatorComponent implements OnInit {

  @Input() data!: Product[];
  @Output() dataToParent = new EventEmitter();

  constructor() {
  }


  ngOnInit(): void {
  }

  onPaginator($event: PageEvent) {
    this.dataToParent.emit($event);
  }
}
