import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Workout } from './workout';
import { WORKOUTS } from './mock-workouts';
import { CaloriesService } from './calories.service';
import { LastWorkoutsService } from './last-workouts.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor(
	private caloriesService: CaloriesService, 
	private lastWorkoutsService: LastWorkoutsService
  ) {}
  
  getWorkouts() {
	  return WORKOUTS;
  }
  
  addWorkout(workout: Workout): void {
	  this.caloriesService.addCalories(workout.kcal);
	  this.lastWorkoutsService.addWorkout(workout);
  }
}
