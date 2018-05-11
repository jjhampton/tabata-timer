import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalSelectorComponent } from './interval-selector.component';

describe('IntervalSelectorComponent', () => {
  let component: IntervalSelectorComponent;
  let fixture: ComponentFixture<IntervalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
