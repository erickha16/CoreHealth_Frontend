import { TestBed } from '@angular/core/testing';

import { ClinicHistoriesService } from './clinic-histories.service';

describe('ClinicHistoriesService', () => {
  let service: ClinicHistoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicHistoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
