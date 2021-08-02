import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../services/current-user/current-user.service";
import {User} from "../auth/auth.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes = [
    {
      path: "Products",
      routerLink: ""
    },
    {
      path: "Store",
      routerLink: "/stores"
    }
  ]
  loggedInUser!: User;

  constructor(private currentUser: CurrentUserService) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.currentUser.getLoggedInUser();
  }

}
