import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoBxmedicoComponent } from './apartado-bxmedico.component';

describe('ApartadoBxmedicoComponent', () => {
  let component: ApartadoBxmedicoComponent;
  let fixture: ComponentFixture<ApartadoBxmedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartadoBxmedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartadoBxmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
