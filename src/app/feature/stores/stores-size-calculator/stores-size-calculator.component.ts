import {Component, OnInit} from '@angular/core';
import {Store} from "../store.interface";
import {Product} from "../../products/product.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stores-size-calculator',
  templateUrl: './stores-size-calculator.component.html',
  styleUrls: ['./stores-size-calculator.component.css']
})
export class StoresSizeCalculatorComponent implements OnInit {
  clickedStore!: Store;
  products!: Product[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
  }

  isStoreBigEnough(store: Store, products: Product[]) {
    let areaOfAllProducts = 0;
    products.forEach(item => {
      areaOfAllProducts += item.length * item.width;
    })
    const areaOfClickedStore = store.length * store.width;
    const result = areaOfClickedStore / areaOfAllProducts;
    return result >= 1;
  }
}
