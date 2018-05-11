import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  constructor() { }

  startCountdownTimer(time: number) {
    const timer = setInterval(() => {
      time--;
      this.timerUpdate.next(time);

      if (time <= 0)
        clearInterval(timer);
    }, 1000);
  }

  timerUpdate: Subject<number> = new Subject<number>();
}
