import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    constructor(private router: Router, private http: HttpClient) {}
    public getRelevantFoodItems() {
        return this.http.get(`http://localhost:3000${this.router.url}`);
    }
}