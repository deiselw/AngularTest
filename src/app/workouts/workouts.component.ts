import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Workout } from '../workout';
import { WorkoutService } from '../workout.service'

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
	workouts: Workout[];

	constructor(
		private workoutService: WorkoutService, 
		private location: Location
	) {}

	ngOnInit() {
		this.getWorkouts();
	}

	getWorkouts(): void {
		this.workouts = this.workoutService.getWorkouts();
	}
	
	add(workout: Workout): void {
		this.workoutService.addWorkout(workout);
		this.location.back();
	}
	
	cancel() {
		this.location.back();
	}
}
