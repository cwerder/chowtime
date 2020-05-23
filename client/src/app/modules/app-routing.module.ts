import { RouteGuard } from './../route-guard.guard';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { SuccessComponent } from '../components/success/success.component';
import { ErrorComponent } from '../components/error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
    // sets up route constants where you define your routes
    { path: 'success', component: SuccessComponent, canActivate: [RouteGuard] },
    { path: 'error', component: ErrorComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '', component: RegisterComponent}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuard]
})
export class AppRoutingModule { }