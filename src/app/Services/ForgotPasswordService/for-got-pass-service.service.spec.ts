import { TestBed } from '@angular/core/testing';

import { ForGotPassServiceService } from './for-got-pass-service.service';

describe('ForGotPassServiceService', () => {
  let service: ForGotPassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForGotPassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
