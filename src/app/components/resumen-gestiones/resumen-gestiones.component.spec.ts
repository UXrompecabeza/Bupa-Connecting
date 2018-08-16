import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenGestionesComponent } from './resumen-gestiones.component';

describe('ResumenGestionesComponent', () => {
  let component: ResumenGestionesComponent;
  let fixture: ComponentFixture<ResumenGestionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenGestionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenGestionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
