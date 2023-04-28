import { PromptUpdateService } from '../src/app/modules/pwa/services/prompt-update.service';
import { TestBed } from '@angular/core/testing';

describe('PromptUpdateService', () => {
  let service: PromptUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
