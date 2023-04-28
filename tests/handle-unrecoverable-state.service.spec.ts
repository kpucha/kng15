import { HandleUnrecoverableStateService } from '../src/app/modules/pwa/services/handle-unrecoverable-state.service';
import { TestBed } from '@angular/core/testing';

describe('HandleUnrecoverableStateService', () => {
  let service: HandleUnrecoverableStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUnrecoverableStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
