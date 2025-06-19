import { TestBed } from '@angular/core/testing';

import { PrescriptionMedicationService } from './prescription-medication.service';

describe('PrescriptionMedicationService', () => {
  let service: PrescriptionMedicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionMedicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
