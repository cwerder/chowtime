import { SuccessComponent } from './components/success/success.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication.module';
import { CookieService } from 'ngx-cookie-service';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoodComponent } from './components/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    FoodComponent
  ],
  imports: [
    AuthenticationModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
