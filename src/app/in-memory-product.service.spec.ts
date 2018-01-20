import { TestBed, inject } from '@angular/core/testing';

import { InMemoryProductService } from './in-memory-product.service';

describe('InMemoryProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryProductService]
    });
  });

  it('should be created', inject([InMemoryProductService], (service: InMemoryProductService) => {
    expect(service).toBeTruthy();
  }));
});
