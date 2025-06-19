import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicEditComponent } from './clinic-edit.component';

describe('ClinicEditComponent', () => {
  let component: ClinicEditComponent;
  let fixture: ComponentFixture<ClinicEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
