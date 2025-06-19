import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailModal } from './patient-detail-modal';

describe('PatientDetailModal', () => {
  let component: PatientDetailModal;
  let fixture: ComponentFixture<PatientDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
