import { TestBed } from '@angular/core/testing';

import { StoringDataService } from './storingdata.service';

describe('StoringdataService', () => {
  let service: StoringDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoringDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
