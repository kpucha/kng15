import { LayoutService } from '../src/app/modules/layout/layout.service';
import { TestBed } from '@angular/core/testing';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
