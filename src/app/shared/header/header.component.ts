import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../services/current-user/current-user.service";
import {User} from "../auth/auth.interface";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

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
  isLoggedIn!: boolean;

  constructor(private currentUser: CurrentUserService,
              private authService: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loggedInUser = this.currentUser.getLoggedInUser();
  }

  onLogOut() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.logout();
    this.loggedInUser = this.currentUser.getLoggedInUser();

  }

  onLogIn() {


  }
}
