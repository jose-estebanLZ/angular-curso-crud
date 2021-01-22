import { TestBed } from '@angular/core/testing';

import { BandasRockService } from './bandas-rock.service';

describe('BandasRockService', () => {
  let service: BandasRockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandasRockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
