import { TestBed } from '@angular/core/testing';

import { MantrasService } from './mantras.service';

describe('MantrasService', () => {
  let service: MantrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MantrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
