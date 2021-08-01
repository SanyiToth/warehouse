import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  }

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });


  submit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .subscribe(
          (user) => {
            console.log("user", user);
            console.log("isLoggedIn", this.authService.isLoggedIn());
            /*            this.notifications.open("Successful login!");*/
            setTimeout(() => {
              this.router.navigate([""]);
            }, 2000);
          },
          error => {
            /*    this.notifications.open(error);*/
          });
      this.loginForm.reset();
    }
  }


  ngOnInit(): void {
  }

  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

}



