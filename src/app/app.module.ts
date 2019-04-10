import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkoutsComponent } from './workouts/workouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastWorkoutsComponent } from './last-workouts/last-workouts.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    DashboardComponent,
    LastWorkoutsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
