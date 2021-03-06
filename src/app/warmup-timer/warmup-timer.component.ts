import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-warmup-timer',
  templateUrl: './warmup-timer.component.html',
  styleUrls: ['./warmup-timer.component.css']
})
export class WarmupTimerComponent implements OnInit, OnDestroy {
  @Output() warmupFinished = new EventEmitter();

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      const isTimeRemaining = value > 0;
      if (!isTimeRemaining) {
        this._timerSubscription.unsubscribe();
        this.finishWarmup();
      }

      this.timeDisplay = moment(value).format('mm:ss:SS');
    });

    const countdownTime = moment(10, 'minutes');
    this.timerService.startMinutesTimer(countdownTime);
  }

  ngOnDestroy() {
     this._timerSubscription.unsubscribe();
  }

  finishWarmup() {
    this.isFinished = true;

    setTimeout(() => {
      this.warmupFinished.emit();
    }, 3000);
  }

  timeDisplay: string;
  isFinished: boolean;
  private _timerSubscription: Subscription;
}
