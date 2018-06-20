import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoRutComponent } from './ingreso-rut.component';

describe('IngresoRutComponent', () => {
  let component: IngresoRutComponent;
  let fixture: ComponentFixture<IngresoRutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoRutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoRutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
