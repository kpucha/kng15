import { LogUpdateService } from '../src/app/modules/pwa/services/log-update.service';
import { TestBed } from '@angular/core/testing';

describe('LogUpdateService', () => {
  let service: LogUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
