import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = [
    {
      path: "Home",
      routerLink: ""
    },
    {
      path: "Products",
      routerLink: "/products"
    },
    {
      path: "Store",
      routerLink: "/store"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
