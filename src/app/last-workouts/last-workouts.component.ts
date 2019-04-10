import { Component, OnInit } from '@angular/core';

import { LastWorkoutsService } from '../last-workouts.service'

@Component({
  selector: 'app-last-workouts',
  templateUrl: './last-workouts.component.html',
  styleUrls: ['./last-workouts.component.css']
})
export class LastWorkoutsComponent implements OnInit {

  constructor(public lastWorkoutsService: LastWorkoutsService) { }

  ngOnInit() {
  }

}
