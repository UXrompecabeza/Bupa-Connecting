import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPacienteEncontradoComponent } from './info-paciente-encontrado.component';

describe('InfoPacienteEncontradoComponent', () => {
  let component: InfoPacienteEncontradoComponent;
  let fixture: ComponentFixture<InfoPacienteEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPacienteEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPacienteEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
