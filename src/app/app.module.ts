import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkoutSelectorComponent } from './workout-selector/workout-selector.component';
import { IntervalSelectorComponent } from './interval-selector/interval-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutSelectorComponent,
    IntervalSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
