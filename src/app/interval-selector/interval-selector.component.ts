import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-interval-selector',
  templateUrl: './interval-selector.component.html',
  styleUrls: ['./interval-selector.component.css']
})
export class IntervalSelectorComponent implements OnInit {
  @Output() intervalCountSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.intervalCountOptions = [2, 4, 6, 8];
  }

  selectIntervalCount(count: number) {
    this.intervalCountSelected.emit(count);
  }

  intervalCountOptions: number[];

}
