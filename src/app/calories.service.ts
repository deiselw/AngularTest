import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {
	calories: number = 0;

  constructor() {}
  
  addCalories(calories: number) {
	  this.calories += calories;
  }
}
