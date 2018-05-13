import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { TimerService } from '../timer.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-cooldown-timer',
  templateUrl: './cooldown-timer.component.html',
  styleUrls: ['./cooldown-timer.component.css']
})
export class CooldownTimerComponent implements OnInit, OnDestroy {
  @Output() cooldownFinished = new EventEmitter();

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this._timerSubscription = this.timerService.timerUpdate.subscribe(value => {
      const isTimeRemaining = value > 0;
      if (!isTimeRemaining) {
        this._timerSubscription.unsubscribe();            this.finishCooldown();
      }

      this.timeDisplay = moment(value).format('mm:ss:SS');
    });

    const countdownTime = moment(10, 'minutes');
    this.timerService.startMinutesTimer(countdownTime);
  }

  ngOnDestroy() {
    this._timerSubscription.unsubscribe();
  }

  finishCooldown() {
    this.isFinished = true;

    setTimeout(() => {
     this.cooldownFinished.emit();
    }, 3000);
  }

  timeDisplay: string;
  isFinished: boolean;
  private _timerSubscription: Subscription;
}
