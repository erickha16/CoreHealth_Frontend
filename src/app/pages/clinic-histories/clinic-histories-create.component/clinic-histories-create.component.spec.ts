import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoriesCreateComponent } from './clinic-histories-create.component';

describe('ClinicHistoriesCreateComponent', () => {
  let component: ClinicHistoriesCreateComponent;
  let fixture: ComponentFixture<ClinicHistoriesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicHistoriesCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoriesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
