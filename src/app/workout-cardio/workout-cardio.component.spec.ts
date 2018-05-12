import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCardioComponent } from './workout-cardio.component';

describe('WorkoutCardioComponent', () => {
  let component: WorkoutCardioComponent;
  let fixture: ComponentFixture<WorkoutCardioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCardioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
