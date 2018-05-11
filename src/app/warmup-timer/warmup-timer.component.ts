import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-warmup-timer',
  templateUrl: './warmup-timer.component.html',
  styleUrls: ['./warmup-timer.component.css']
})
export class WarmupTimerComponent implements OnInit {
  @Output() warmupFinished = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startWorkout() {
    this.warmupFinished.emit();
  }

}
