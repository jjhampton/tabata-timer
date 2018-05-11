import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Workout } from '../app.component';

@Component({
  selector: 'app-workout-selector',
  templateUrl: './workout-selector.component.html',
  styleUrls: ['./workout-selector.component.css']
})
export class WorkoutSelectorComponent implements OnInit {
  @Output() workoutSelected = new EventEmitter<Workout>();

  constructor() {}

  ngOnInit() {}

  selectWorkout(workout: Workout) {
    this.workoutSelected.emit(workout);
  }
}
