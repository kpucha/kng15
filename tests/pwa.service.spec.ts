import { PwaService } from '../src/app/modules/pwa/services/pwa.service';
import { TestBed } from '@angular/core/testing';

describe('PwaService', () => {
  let service: PwaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
