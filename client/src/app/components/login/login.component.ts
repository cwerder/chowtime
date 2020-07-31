import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ])
  });

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      () => {
        this.router.navigate(['/error'])
      }
    );
  }

}
