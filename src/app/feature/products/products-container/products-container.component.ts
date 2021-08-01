import {Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../stores/store.interface";
import {ProductsService} from "../../../shared/services/products/products.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  products: Product[] = [];
  deletedElement!: Product | Store;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
  }

  getDeletedElement($event: any) {
    this.deletedElement = $event;
    this.productsService.deleteProduct(this.deletedElement.id)
      .subscribe(resp => {
        console.log('resp', resp)
      })
  }
}
