import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmupTimerComponent } from './warmup-timer.component';

describe('WarmupTimerComponent', () => {
  let component: WarmupTimerComponent;
  let fixture: ComponentFixture<WarmupTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmupTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmupTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
