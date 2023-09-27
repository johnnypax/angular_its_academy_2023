import { TestBed } from '@angular/core/testing';

import { StudenteService } from './studente.service';

describe('StudenteService', () => {
  let service: StudenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
