import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutSelectorComponent } from './workout-selector/workout-selector.component';
import { IntervalSelectorComponent } from './interval-selector/interval-selector.component';
import { WarmupTimerComponent } from './warmup-timer/warmup-timer.component';
import { WorkoutCardioComponent } from './workout-cardio/workout-cardio.component';
import { WorkoutBodyweightComponent } from './workout-bodyweight/workout-bodyweight.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutSelectorComponent,
    IntervalSelectorComponent,
    WarmupTimerComponent,
    WorkoutCardioComponent,
    WorkoutBodyweightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
