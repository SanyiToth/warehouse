import {Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../shared/services/products/products.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  products: Product[] = [];
  deletedElement!: Product;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
  }

  getDeletedElement($event: Product) {
    this.deletedElement = $event;
    this.productsService.deleteProduct(this.deletedElement.id)
      .pipe(
        switchMap(() => this.productsService.getProducts()))
      .subscribe(products => {
          this.products = products;
        }, errorMsg => {

        }
      )
  }

}
