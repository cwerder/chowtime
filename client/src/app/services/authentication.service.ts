import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
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
}
