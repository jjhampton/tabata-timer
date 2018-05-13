import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooldownTimerComponent } from './cooldown-timer.component';

describe('CooldownTimerComponent', () => {
  let component: CooldownTimerComponent;
  let fixture: ComponentFixture<CooldownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooldownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooldownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
