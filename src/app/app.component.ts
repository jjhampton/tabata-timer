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
    this.startSelecting();
    this.workout = Workout.BodyWeight;
    this.intervalCount = 2;
  }

  workoutSelected(selection: Workout) {
    this.workout = selection;
  }

  intervalCountSelected(selection: number) {
    this.intervalCount = selection;
  }

  reset() {
    this.isSelecting = false;
    this.isWarmingUp = false;
    this.isWorkingOut = false;
    this.isCoolingDown = false;
  }

  startSelecting() {
    this.reset();
    this.isSelecting = true;
  }

  startWarmup() {
    this.reset();
    this.isWarmingUp = true;
  }

  startWorkout() {
    this.reset();
    this.isWorkingOut = true;
  }

  startCooldown() {
    this.reset();
    this.isCoolingDown = true;
  }

  isSelecting: boolean;
  isWarmingUp: boolean;
  isWorkingOut: boolean;
  isCoolingDown: boolean;
  WorkoutOptions = Workout;
  workout: Workout;
  intervalCount: number;
}
