import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCvDoctorHComponent } from './modal-cv-doctor-h.component';

describe('ModalCvDoctorHComponent', () => {
  let component: ModalCvDoctorHComponent;
  let fixture: ComponentFixture<ModalCvDoctorHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCvDoctorHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCvDoctorHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
