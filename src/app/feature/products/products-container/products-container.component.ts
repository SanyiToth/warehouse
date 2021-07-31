import {Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  products: Product[] = [];


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
    console.log('products', this.products)
  }
}
