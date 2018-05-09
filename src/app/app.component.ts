import { Component, OnInit } from '@angular/core';

export enum Workout {
  BodyWeight,
  CardioMachine
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.workout = Workout.BodyWeight;
  }

  workoutSelected(selection: Workout) {
    this.workout = selection;
  }

  workout: Workout;
}
