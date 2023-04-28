import { CheckForUpdateService } from '../src/app/modules/pwa/services/check-for-update.service';
import { TestBed } from '@angular/core/testing';

describe('CheckForUpdateService', () => {
  let service: CheckForUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckForUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
