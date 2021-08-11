import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CurrentUserService} from "../services/current-user/current-user.service";
import {User} from "../auth/auth.interface";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification/notification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
  @Output() isLoggedInStatus = new EventEmitter<boolean>();

  constructor(private currentUser: CurrentUserService,
              private authService: AuthService,
              private notification: NotificationService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.authorization();
  }

  onLogOut() {
    this.notification.open("You've been logged out!");
    setTimeout(() => {
      this.authService.logout();
      this.authorization();
      this.router.navigate(['/login']);
    }, 1000);

  }

  authorization() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loggedInUser = this.currentUser.getLoggedInUser();
    this.isLoggedInStatus.emit(this.isLoggedIn);
  }


}
