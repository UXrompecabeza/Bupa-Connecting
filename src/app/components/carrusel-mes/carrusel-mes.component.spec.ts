import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselMesComponent } from './carrusel-mes.component';

describe('CarruselMesComponent', () => {
  let component: CarruselMesComponent;
  let fixture: ComponentFixture<CarruselMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarruselMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarruselMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
