import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/app/models/cart.model';
import { CartService } from './../../services/cart.service';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.less']
})
export class FoodComponent implements OnInit {

  // this should be a FoodItem, not a CartItem
  public foodItems: CartItem[];
  private maxSelection: any[];

  constructor(private foodService: FoodService, private cartService: CartService) { 
    this.maxSelection = Array(10).fill(0).map((_,i) => i+1);
  }

  ngOnInit(): void {
    this.foodService.getRelevantFoodItems()
      .subscribe(response => {
        this.foodItems = Object.values(response);
      });
  }

  public addToCart(cartItem: CartItem): void {
    if (cartItem.quantity === undefined || cartItem.quantity === 0) {
      cartItem.quantity = 1;
    }
    this.cartService.addToCart(cartItem).subscribe(res => console.log('response', res));
  }

  quantitySelected(event, cartItem: CartItem): void {
    cartItem.quantity = parseInt(event.target.value);
  }
}
