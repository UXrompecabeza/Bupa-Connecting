import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPatientsComponent } from './info-patients.component';

describe('InfoPatientsComponent', () => {
  let component: InfoPatientsComponent;
  let fixture: ComponentFixture<InfoPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
