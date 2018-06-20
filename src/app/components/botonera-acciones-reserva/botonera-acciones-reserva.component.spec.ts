import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraAccionesReservaComponent } from './botonera-acciones-reserva.component';

describe('BotoneraAccionesReservaComponent', () => {
  let component: BotoneraAccionesReservaComponent;
  let fixture: ComponentFixture<BotoneraAccionesReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraAccionesReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraAccionesReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
