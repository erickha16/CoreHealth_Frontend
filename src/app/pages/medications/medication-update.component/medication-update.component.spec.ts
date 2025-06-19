import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationUpdateComponent } from './medication-update.component';

describe('MedicationUpdateComponent', () => {
  let component: MedicationUpdateComponent;
  let fixture: ComponentFixture<MedicationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
