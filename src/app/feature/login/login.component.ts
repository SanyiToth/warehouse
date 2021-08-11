import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth/auth.service";
import {NotificationService} from "../../shared/services/notification/notification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder,
              private authService:AuthService,
             private notifications:NotificationService,
              private router:Router) {
  }

  loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  });


  submit() {
    if (this.loginForm.valid) {
      this.formValueToHeader.emit(this.loginForm.value);
        this.authService
          .login(this.loginForm.value)
          .subscribe(
            (user) => {
           this.notifications.open("Successful login!");
              setTimeout(() => {
                this.router.navigate([""]);
              }, 2000);
            },
            error => {
            this.notifications.open("Something went wrong! Try again!");
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

  @Output() formValueToHeader = new EventEmitter();

}



