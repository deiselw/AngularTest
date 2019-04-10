import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutsComponent } from './workouts/workouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'workouts', component: WorkoutsComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
