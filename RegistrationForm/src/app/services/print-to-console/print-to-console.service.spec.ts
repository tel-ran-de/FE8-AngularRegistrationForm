import { TestBed } from '@angular/core/testing';

import { PrintToConsoleService } from './print-to-console.service';

describe('PrintToConsoleService', () => {
  let service: PrintToConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintToConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
