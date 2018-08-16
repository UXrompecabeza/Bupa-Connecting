import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaPromocionesComponent } from './columna-promociones.component';

describe('ColumnaPromocionesComponent', () => {
  let component: ColumnaPromocionesComponent;
  let fixture: ComponentFixture<ColumnaPromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaPromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
