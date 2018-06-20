import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCvDoctorComponent } from './modal-cv-doctor.component';

describe('ModalCvDoctorComponent', () => {
  let component: ModalCvDoctorComponent;
  let fixture: ComponentFixture<ModalCvDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCvDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCvDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
