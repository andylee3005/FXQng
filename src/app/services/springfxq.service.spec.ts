import { TestBed } from '@angular/core/testing';

import { SpringfxqService } from './springfxq.service';

describe('SpringfxqService', () => {
  let service: SpringfxqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringfxqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
