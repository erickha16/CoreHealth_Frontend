import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicationsUpdateComponent } from './prescription-medications-update.component';

describe('PrescriptionMedicationsUpdateComponent', () => {
  let component: PrescriptionMedicationsUpdateComponent;
  let fixture: ComponentFixture<PrescriptionMedicationsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionMedicationsUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionMedicationsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
