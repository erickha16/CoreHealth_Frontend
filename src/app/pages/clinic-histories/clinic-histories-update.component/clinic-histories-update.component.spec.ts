import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoriesUpdateComponent } from './clinic-histories-update.component';

describe('ClinicHistoriesUpdateComponent', () => {
  let component: ClinicHistoriesUpdateComponent;
  let fixture: ComponentFixture<ClinicHistoriesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicHistoriesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoriesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
