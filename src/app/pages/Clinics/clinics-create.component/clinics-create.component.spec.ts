import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsCreateComponent } from './clinics-create.component';

describe('ClinicsCreateComponent', () => {
  let component: ClinicsCreateComponent;
  let fixture: ComponentFixture<ClinicsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
