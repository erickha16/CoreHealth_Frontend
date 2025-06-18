import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsDeleteComponent } from './clinics-delete.component';

describe('ClinicsDeleteComponent', () => {
  let component: ClinicsDeleteComponent;
  let fixture: ComponentFixture<ClinicsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
