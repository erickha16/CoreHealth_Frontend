import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionShowComponent } from './prescription-show.component';

describe('PrescriptionShowComponent', () => {
  let component: PrescriptionShowComponent;
  let fixture: ComponentFixture<PrescriptionShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
