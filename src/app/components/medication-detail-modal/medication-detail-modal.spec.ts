import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationDetailModal } from './medication-detail-modal';

describe('MedicationDetailModal', () => {
  let component: MedicationDetailModal;
  let fixture: ComponentFixture<MedicationDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
