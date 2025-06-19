import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicHistoriesListComponent } from './clinic-histories-list.component';

describe('ClinicHistoriesListComponent', () => {
  let component: ClinicHistoriesListComponent;
  let fixture: ComponentFixture<ClinicHistoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicHistoriesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicHistoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
