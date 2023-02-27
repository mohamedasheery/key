import { TestBed } from '@angular/core/testing';

import { TypeFieldDataService } from './type-field-data.service';

describe('TypeFieldDataService', () => {
  let service: TypeFieldDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeFieldDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
