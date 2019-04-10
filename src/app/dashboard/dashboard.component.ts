import { Component, OnInit } from '@angular/core';

import { CaloriesService } from '../calories.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public caloriesService: CaloriesService) { }

  ngOnInit() {
  }

}
