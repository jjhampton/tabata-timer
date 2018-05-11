import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-warmup-timer',
  templateUrl: './warmup-timer.component.html',
  styleUrls: ['./warmup-timer.component.css']
})
export class WarmupTimerComponent implements OnInit, OnDestroy {
  @Output() warmupFinished = new EventEmitter();

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.time = 20;
    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      this.time = value;
    });

    this.timerService.startCountdownTimer(this.time);
  }

  ngOnDestroy() {
     this._timerSubscription.unsubscribe();
  }

  startWorkout() {
    this.warmupFinished.emit();
  }

  time: number;
  private _timerSubscription: Subscription;
}
