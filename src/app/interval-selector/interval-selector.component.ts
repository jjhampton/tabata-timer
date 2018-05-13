import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IOption {
  id: number;
  name: string;
}

@Component({
  selector: 'app-interval-selector',
  templateUrl: './interval-selector.component.html',
  styleUrls: ['./interval-selector.component.css']
})
export class IntervalSelectorComponent implements OnInit {
  @Input() intervals: number;
  @Output() intervalCountSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.intervalCountOptions = [
      {
        id: 2,
        name: '2'
      },
      {
        id: 4,
        name: '4'
      },
      {
        id: 6,
        name: '6'
      },
      {
        id: 8,
        name: '8'
      }
    ];

    this.selectedOption = this.intervalCountOptions.find(
      x => x.id === this.intervals
    );
  }

  selectIntervalCount() {
    const count = this.selectedOption.id;
    this.intervalCountSelected.emit(count);
  }

  intervalCountOptions: IOption[];
  selectedOption: IOption;
}
