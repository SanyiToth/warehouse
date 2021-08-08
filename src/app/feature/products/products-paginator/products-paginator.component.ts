import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../product.interface";
import {PageEvent} from "@angular/material/paginator";
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
  selector: 'app-products-paginator',
  templateUrl: './products-paginator.component.html',
  styleUrls: ['./products-paginator.component.css']
})
export class ProductsPaginatorComponent implements OnInit {

  @Input() data!: Product[];
  @Output() dataToParent = new EventEmitter<PageEvent>();

  pageEvent!: PageEvent;
  datasource: null;
  pageIndex!: number;
  pageSize!: number;
  length!: number;

  constructor(private productsService: ProductsService) {
  }


  ngOnInit(): void {
  }
}
