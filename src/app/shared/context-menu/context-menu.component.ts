import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Product} from "../../feature/products/product.interface";
import {Store} from "../../feature/stores/store.interface";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {
  @Input() element!: Product | Store;
  @Output() deletedElement = new EventEmitter<Product | Store>();
  isLoggedIn!: boolean;

  constructor(private auth: AuthService) {
  }


  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  onDelete() {
    this.deletedElement.emit(this.element);
  }
}
