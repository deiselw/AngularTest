import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWorkoutsComponent } from './last-workouts.component';

describe('LastWorkoutsComponent', () => {
  let component: LastWorkoutsComponent;
  let fixture: ComponentFixture<LastWorkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastWorkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
