import { TestBed } from '@angular/core/testing';

import { HostApiService } from './host-api.service';

describe('HostApiService', () => {
  let service: HostApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
