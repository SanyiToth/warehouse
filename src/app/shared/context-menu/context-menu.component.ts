import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../../feature/products/product.interface";
import {Store} from "../../feature/stores/store.interface";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @Input() element!: Product | Store;
  @Output() clickedElement = new EventEmitter<Product | Store>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.clickedElement.emit(this.element);
  }
}
