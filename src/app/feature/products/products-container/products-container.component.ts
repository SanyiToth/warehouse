import {Component, OnInit} from '@angular/core';
import {Product} from "../product.interface";
import {ActivatedRoute} from "@angular/router";
import {Store} from "../../stores/store.interface";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  products: Product[] = [];
  deletedElement!: Product | Store;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.route.snapshot.data.products;
  }

  getDeletedElement($event:any) {
    this.deletedElement = $event;
  }
}
