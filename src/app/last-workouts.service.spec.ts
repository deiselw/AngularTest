import { TestBed } from '@angular/core/testing';

import { LastWorkoutsService } from './last-workouts.service';

describe('LastWorkoutsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LastWorkoutsService = TestBed.get(LastWorkoutsService);
    expect(service).toBeTruthy();
  });
});
