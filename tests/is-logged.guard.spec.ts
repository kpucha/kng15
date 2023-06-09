import { IsLoggedGuard } from '../src/app/modules/auth/guards/is-logged.guard';
import { TestBed } from '@angular/core/testing';

describe('IsLoggedGuard', () => {
  let guard: IsLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
