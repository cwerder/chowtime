import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent {

  private loginSelected: boolean = true;

  constructor() { }

  public twitterOAuth() {
    window.open("http://localhost:3000/oauth/twitter", "_self");
  }

}
