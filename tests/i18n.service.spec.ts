import { I18nService } from '../src/app/modules/i18n/i18n.service';
import { TestBed } from '@angular/core/testing';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
