import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Product} from "../product.interface";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {

  @Input() products!: Product[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log('products-list', this.products)
  }

}
