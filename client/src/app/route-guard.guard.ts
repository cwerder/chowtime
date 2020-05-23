import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
      if (!localStorage.getItem('authorization')) {
        this.router.navigate(['/error']);
        return false;
      }
      return true;
  }
}
