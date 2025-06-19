import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicationsCreateComponent } from './prescription-medications-create.component';

describe('PrescriptionMedicationsCreateComponent', () => {
  let component: PrescriptionMedicationsCreateComponent;
  let fixture: ComponentFixture<PrescriptionMedicationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionMedicationsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionMedicationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
