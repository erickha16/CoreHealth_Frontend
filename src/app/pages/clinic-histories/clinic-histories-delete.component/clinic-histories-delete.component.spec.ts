import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoriesDeleteComponent } from './clinic-histories-delete.component';

describe('ClinicHistoriesDeleteComponent', () => {
  let component: ClinicHistoriesDeleteComponent;
  let fixture: ComponentFixture<ClinicHistoriesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicHistoriesDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoriesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
