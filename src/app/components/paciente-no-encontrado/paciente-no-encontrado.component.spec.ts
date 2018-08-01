import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteNoEncontradoComponent } from './paciente-no-encontrado.component';

describe('PacienteNoEncontradoComponent', () => {
  let component: PacienteNoEncontradoComponent;
  let fixture: ComponentFixture<PacienteNoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteNoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteNoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
