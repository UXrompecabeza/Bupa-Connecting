import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaHoraprecioComponent } from './reserva-horaprecio.component';

describe('ReservaHoraprecioComponent', () => {
  let component: ReservaHoraprecioComponent;
  let fixture: ComponentFixture<ReservaHoraprecioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaHoraprecioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaHoraprecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
