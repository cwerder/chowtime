import { FoodService } from '../../services/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.less']
})
export class FoodComponent implements OnInit {

  public foodItems: [];
  public maxSelection: any[];

  constructor(private foodService: FoodService) { 
    this.maxSelection = Array(10).fill(0).map((_,i) => i+1);
  }

  ngOnInit(): void {
    this.foodService.getRelevantFoodItems()
      .subscribe(response => {
        this.foodItems = Object.values(response) as [];
      });
  }

  public addToCart(foodItem): void {
    console.log(foodItem);
  }
}
