import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
 
@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    private headers: HttpHeaders;

    public isLoggedIn: boolean;

    constructor(private cookieService: CookieService, private http: HttpClient, private router: Router) {
        this.headers = new HttpHeaders();
    }

    public register(body): Observable<string> {
        return this.http.post(
            'http://localhost:3000/user/register',
            body, 
            {
                headers: this.headers.append(
                    "Content-Type", "application/json",
                ),
                responseType: 'text',
                withCredentials: true
            });
    }

    public login(body): Observable<string> {
        return this.http.post(
            'http://localhost:3000/user/signin',
            body, 
            {
                headers: this.headers.append(
                    "Content-Type", "application/json",
                ),
                responseType: 'text',
                withCredentials: true
            });
    }

    public secret(): Observable<string> {
        return this.http.get(
            'http://localhost:3000/user/secret',
            {
                responseType: 'text',
                withCredentials: true
            }
        );
    }

    public redirectToLogin() {
        this.router.navigate(['/authentication']);
        this.isLoggedIn = false;
    }

    public logout() {
        this.cookieService.set('authorization', this.cookieService.get('authorization'), new Date());
        this.redirectToLogin();
        this.isLoggedIn = false;
    }

    public loginStatus(): boolean {
        return this.cookieService.check('authorization');
    }
}
