import { TestBed } from '@angular/core/testing';

import { studentdataservice } from './StudentdataService';

describe('StudentdataService', () => {
  let service: studentdataservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(studentdataservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
