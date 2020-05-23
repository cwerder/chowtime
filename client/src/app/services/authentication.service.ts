import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders();
    }

    register(body) {
        return this.http.post(
            'http://localhost:3000/user/register',
            body, 
            {
                headers: this.headers.append(
                    "Content-Type", "application/json",
                ),
                withCredentials: true
            });
    }

    secret() {
        return this.http.get(
            'http://localhost:3000/user/secret',
            {
                responseType: 'text',
                withCredentials: true
            }
        )
    }
}
