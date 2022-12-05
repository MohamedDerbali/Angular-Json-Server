import { TestBed } from '@angular/core/testing';

import { ToutorielService } from './toutoriel.service';

describe('ToutorielService', () => {
  let service: ToutorielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToutorielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
