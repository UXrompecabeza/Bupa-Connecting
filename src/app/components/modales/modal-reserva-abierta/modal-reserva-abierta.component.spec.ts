import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservaAbiertaComponent } from './modal-reserva-abierta.component';

describe('ModalReservaAbiertaComponent', () => {
  let component: ModalReservaAbiertaComponent;
  let fixture: ComponentFixture<ModalReservaAbiertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReservaAbiertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReservaAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
