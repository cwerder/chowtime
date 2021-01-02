import { FoodService } from '../../services/food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.less']
})
export class FoodComponent implements OnInit {

  public foodItems: [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getRelevantFoodItems()
      .subscribe(response => {
        this.foodItems = Object.values(response) as [];
      });
  }
}
