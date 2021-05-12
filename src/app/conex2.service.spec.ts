import { TestBed } from '@angular/core/testing';

import { Conex2Service } from './conex2.service';

describe('Conex2Service', () => {
  let service: Conex2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Conex2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
