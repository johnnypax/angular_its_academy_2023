import { TestBed } from '@angular/core/testing';

import { ProdottoserviceService } from './prodottoservice.service';

describe('ProdottoserviceService', () => {
  let service: ProdottoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdottoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
