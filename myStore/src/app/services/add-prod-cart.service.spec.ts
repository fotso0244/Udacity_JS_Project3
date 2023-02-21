import { TestBed } from '@angular/core/testing';

import { AddProdCartService } from './add-prod-cart.service';

describe('AddProdCartService', () => {
  let service: AddProdCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProdCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
