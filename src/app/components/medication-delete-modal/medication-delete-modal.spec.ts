import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationDeleteModal } from './medication-delete-modal';

describe('MedicationDeleteModal', () => {
  let component: MedicationDeleteModal;
  let fixture: ComponentFixture<MedicationDeleteModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationDeleteModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationDeleteModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
