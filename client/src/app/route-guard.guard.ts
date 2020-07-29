import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
      if (!this.cookieService.get('authorization')) {
        this.router.navigate(['/authentication']);
        return false;
      }
      return true;
  }
}
