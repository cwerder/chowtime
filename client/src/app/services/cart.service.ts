import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartItem } from './../models/cart.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private http: HttpClient) {}

    public addToCart(item: CartItem) {
        return this.http.post('/cart/addtocart', item);
    }
}