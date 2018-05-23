import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';
import { AudioService } from '../audio.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-workout-bodyweight',
  templateUrl: './workout-bodyweight.component.html',
  styleUrls: ['./workout-bodyweight.component.css']
})
export class WorkoutBodyweightComponent implements OnInit, OnDestroy {
  @Input() intervals: number;
  @Output() workoutFinished = new EventEmitter();

  constructor(private timerService: TimerService, private audioService: AudioService) { }

  ngOnInit() {
    this.exercises = [
      'Burpees',
      'Jump Squat',
      'Russian Twist',
      'Push-up',
      'Lunge',
      'Lateral Lunge to Knee Dive',
      'Mountain Climber to Single-leg Push-up',
      'Single-arm Kick-through',
      'Lateral Jump Squat',
      'Star Jack'
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
    this.audioService.playWhistle();
    this.currentInterval++;
    this.selectRandomExercise();

    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      const isTimeRemaining = value > 0;
      if (isTimeRemaining) {
        this.timeDisplay = moment(value).format('mm:ss:SS');
        return;
      }

      this._timerSubscription.unsubscribe();
      this.startRest();
    });

    const countdownTime = moment(20, 'seconds');
    this.timerService.startSecondsTimer(countdownTime);
  }

  startRest() {
    this.audioService.playAlarm();
    this.selectedExercise = 'Resting';

    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      const isTimeRemaining = value > 0;
      const hasIntervalsRemaining = this.currentInterval < this.intervals;

      if (isTimeRemaining) {
        this.timeDisplay = moment(value).format('mm:ss:SS');
        return;
      }

      if (hasIntervalsRemaining) {
        this._timerSubscription.unsubscribe();
        this.startExerciseInterval();
        return;
      }

      this._timerSubscription.unsubscribe();
      this.finishWorkout();
    });

    const countdownTime = moment(10, 'seconds');
    this.timerService.startSecondsTimer(countdownTime);
  }

  finishWorkout() {
    this.isFinished = true;

    setTimeout(() => {
      this.workoutFinished.emit();
    }, 3000);
  }

  exercises: string[];
  selectedExercise: string;
  private _timerSubscription: Subscription;
  timeDisplay: string;
  isFinished: boolean;
  currentInterval: number;
}
