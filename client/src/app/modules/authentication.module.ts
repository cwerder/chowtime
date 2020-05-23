import { RegisterComponent } from './../components/register/register.component';
// import { LoginComponent } from './../components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        // LoginComponent,
        RegisterComponent
    ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [
        // LoginComponent,
        RegisterComponent
    ]
})

export class AuthenticationModule { }