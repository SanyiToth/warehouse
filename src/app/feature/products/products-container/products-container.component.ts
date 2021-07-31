import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(resp => {
        console.log("resp", resp)
      })

  }

}
