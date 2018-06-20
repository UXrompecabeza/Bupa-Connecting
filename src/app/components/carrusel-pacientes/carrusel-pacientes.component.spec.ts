import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselPacientesComponent } from './carrusel-pacientes.component';

describe('CarruselPacientesComponent', () => {
  let component: CarruselPacientesComponent;
  let fixture: ComponentFixture<CarruselPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
