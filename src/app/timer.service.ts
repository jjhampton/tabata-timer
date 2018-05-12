import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  constructor() {}

  startSecondsTimer(seconds: moment.Moment) {
    const end = moment().add(seconds.second(), 'seconds');
    this.startTimer(end);
  }

  startMinutesTimer(minutes: moment.Moment) {
    const end = moment().add(minutes.minute(), 'minutes');
    this.startTimer(end);
  }

  private startTimer(end: moment.Moment) {
    if (this.timer)
      clearInterval(this.timer);

    const timer = setInterval(() => {
      const remainingTime = end.diff(moment());
      if (remainingTime <= 0)
        clearInterval(timer);

      this.timerUpdate.next(remainingTime);
    }, 1);

    this.timer = timer;
  }

  timer: NodeJS.Timer;
  timerUpdate: Subject<number> = new Subject<number>();
}
