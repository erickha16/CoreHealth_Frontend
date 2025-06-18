import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsEditComponent } from './clinics-edit.component';

describe('ClinicsEditComponent', () => {
  let component: ClinicsEditComponent;
  let fixture: ComponentFixture<ClinicsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
