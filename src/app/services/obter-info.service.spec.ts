import { TestBed } from '@angular/core/testing';

import { ObterInfoService } from './obter-info.service';

describe('ObterInfoService', () => {
  let service: ObterInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObterInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
