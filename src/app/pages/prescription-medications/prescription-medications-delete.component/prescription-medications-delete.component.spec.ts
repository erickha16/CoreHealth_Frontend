import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicationsDeleteComponent } from './prescription-medications-delete.component';

describe('PrescriptionMedicationsDeleteComponent', () => {
  let component: PrescriptionMedicationsDeleteComponent;
  let fixture: ComponentFixture<PrescriptionMedicationsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionMedicationsDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionMedicationsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
