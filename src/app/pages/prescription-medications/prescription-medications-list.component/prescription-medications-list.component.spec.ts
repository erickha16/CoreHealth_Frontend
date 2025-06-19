import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicationsListComponent } from './prescription-medications-list.component';

describe('PrescriptionMedicationsListComponent', () => {
  let component: PrescriptionMedicationsListComponent;
  let fixture: ComponentFixture<PrescriptionMedicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionMedicationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionMedicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
