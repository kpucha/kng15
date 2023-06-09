import { NotLoggedGuard } from '../src/app/modules/auth/guards/not-logged.guard';
import { TestBed } from '@angular/core/testing';

describe('NotLoggedGuard', () => {
  let guard: NotLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
