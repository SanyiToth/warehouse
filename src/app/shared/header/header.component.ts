import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../services/current-user/current-user.service";
import {User} from "../auth/auth.interface";
import {AuthService} from "../auth/auth.service";

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
              private authService: AuthService) {

  }

  ngOnInit(): void {
    this.loggedInUser = this.currentUser.getLoggedInUser();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogOut() {
    this.authService.logout()
    this.loggedInUser = this.currentUser.getLoggedInUser();
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogIn() {


  }
}
