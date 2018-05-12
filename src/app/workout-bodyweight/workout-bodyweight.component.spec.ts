import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBodyweightComponent } from './workout-bodyweight.component';

describe('WorkoutBodyweightComponent', () => {
  let component: WorkoutBodyweightComponent;
  let fixture: ComponentFixture<WorkoutBodyweightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutBodyweightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutBodyweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
