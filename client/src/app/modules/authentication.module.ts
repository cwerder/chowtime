import { RegisterComponent } from './../components/register/register.component';
import { LoginComponent } from './../components/login/login.component';
import { AuthenticationComponent } from './../components/authentication/authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AuthenticationComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        AuthenticationComponent
    ]
})

export class AuthenticationModule { }