import { Injectable } from '@angular/core';

import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})
export class LastWorkoutsService {
  lastWorkouts: Workout[] = [];

  constructor() { }
  
  addWorkout(workout: Workout): void {
	  this.lastWorkouts.unshift(workout);
  }
}
