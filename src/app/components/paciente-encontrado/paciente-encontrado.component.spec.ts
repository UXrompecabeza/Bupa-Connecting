import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteEncontradoComponent } from './paciente-encontrado.component';

describe('PacienteEncontradoComponent', () => {
  let component: PacienteEncontradoComponent;
  let fixture: ComponentFixture<PacienteEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
