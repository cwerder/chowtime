import { CookieService } from 'ngx-cookie-service';
import { AuthenticationComponent } from './../components/authentication/authentication.component';
import { RouteGuard } from './../route-guard.guard';
import { SuccessComponent } from '../components/success/success.component';
import { ErrorComponent } from '../components/error/error.component';
import { HomeComponent } from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    // sets up route constants where you define your routes
    { path: 'success', component: SuccessComponent, canActivate: [RouteGuard] },
    { path: 'error', component: ErrorComponent },
    { path: 'home', component: HomeComponent, canActivate: [RouteGuard] },
    { path: 'authentication', component: AuthenticationComponent },
    { path: '', component: HomeComponent, canActivate: [RouteGuard] }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard, CookieService]
})
export class AppRoutingModule { }