import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-workout-bodyweight',
  templateUrl: './workout-bodyweight.component.html',
  styleUrls: ['./workout-bodyweight.component.css']
})
export class WorkoutBodyweightComponent implements OnInit, OnDestroy {
  @Input() intervals: number;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.exercises = [
      'burpees',
      'jump squat',
      'russian twist',
      'push-up',
      'lunge',
      'lateral lunge to knee dive',
      'mountain climber to single-leg push-up',
      'single-arm kick-through',
      'lateral jump-squat',
      'star jack'
    ];

    this.currentInterval = 0;
    this.startExerciseInterval();
  }

  ngOnDestroy() {
    this._timerSubscription.unsubscribe();
  }

  selectRandomExercise() {
    const idx = Math.floor(Math.random() * Math.floor(this.exercises.length));
    this.selectedExercise = this.exercises[idx];
  }

  startExerciseInterval() {
    this.currentInterval++;
    this.isExercising = true;
    this.isResting = false;

    this.selectRandomExercise();
    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      if (value <= 0) {
        this._timerSubscription.unsubscribe();
        this.startRest();
      }

      this.timeDisplay = moment(value).format('mm:ss:SS');
    });

    const countdownTime = moment(20, 'seconds');
    this.timerService.startSecondsTimer(countdownTime);
  }

  startRest() {
    this.isExercising = false;
    this.isResting = true;

    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      if (value <= 0 && this.currentInterval < this.intervals) {
        this._timerSubscription.unsubscribe();
        this.startExerciseInterval();
      }

      if (this.currentInterval >= this.intervals)
        this.isFinished = true;

      this.timeDisplay = moment(value).format('mm:ss:SS');
    });

    const countdownTime = moment(10, 'seconds');
    this.timerService.startSecondsTimer(countdownTime);
  }

  exercises: string[];
  selectedExercise: string;
  private _timerSubscription: Subscription;
  timeDisplay: string;
  isExercising: boolean;
  isResting: boolean;
  isFinished: boolean;
  currentInterval: number;
}
