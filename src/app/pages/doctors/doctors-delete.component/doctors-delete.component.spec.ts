import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsDeleteComponent } from './doctors-delete.component';

describe('DoctorsDeleteComponent', () => {
  let component: DoctorsDeleteComponent;
  let fixture: ComponentFixture<DoctorsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
