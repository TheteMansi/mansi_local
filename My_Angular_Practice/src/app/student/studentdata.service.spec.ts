import { TestBed } from '@angular/core/testing';

import { StudentdataService } from './StudentdataService';

describe('StudentdataService', () => {
  let service: StudentdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
