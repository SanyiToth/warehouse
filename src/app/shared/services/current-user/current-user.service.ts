import {Injectable} from '@angular/core';
import {User} from "../../auth/auth.interface";


@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  getLoggedInUser(): User {
    return <User>JSON.parse(<string>localStorage.getItem('loggedInUser'));
  }
}
