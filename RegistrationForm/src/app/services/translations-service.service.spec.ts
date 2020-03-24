import { TestBed } from '@angular/core/testing';

import { TranslationsService } from './translations.service';

describe('TranslationsServiceService', () => {
  let service: TranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
