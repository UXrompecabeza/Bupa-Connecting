import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioExtendidoComponent } from './calendario-extendido.component';

describe('CalendarioExtendidoComponent', () => {
  let component: CalendarioExtendidoComponent;
  let fixture: ComponentFixture<CalendarioExtendidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioExtendidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioExtendidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
