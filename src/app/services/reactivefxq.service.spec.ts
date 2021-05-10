import { TestBed } from '@angular/core/testing';

import { ReactivefxqService } from './reactivefxq.service';

describe('ReactivefxqService', () => {
  let service: ReactivefxqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactivefxqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
