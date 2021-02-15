import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    constructor(private router: Router, private http: HttpClient) {}
    public getRelevantFoodItems() {
        const foodItem = this.router.url.split('/');
        return this.http.get(`/menu/${foodItem[2]}`);
    }
}