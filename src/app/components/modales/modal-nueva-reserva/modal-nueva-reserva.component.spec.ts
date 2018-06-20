import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaReservaComponent } from './modal-nueva-reserva.component';

describe('ModalNuevaReservaComponent', () => {
  let component: ModalNuevaReservaComponent;
  let fixture: ComponentFixture<ModalNuevaReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevaReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
