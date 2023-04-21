import { TestBed } from '@angular/core/testing';

import { GuardServiceService } from './guard-service.service';

describe('GuardServiceService', () => {
  let service: GuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
