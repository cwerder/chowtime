import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  callSecret() {
    this.authenticationService.secret().subscribe(() => {
      this.router.navigate(['success']);
    });
  }

}
