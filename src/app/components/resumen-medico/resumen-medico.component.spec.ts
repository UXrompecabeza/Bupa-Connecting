import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenMedicoComponent } from './resumen-medico.component';

describe('ResumenMedicoComponent', () => {
  let component: ResumenMedicoComponent;
  let fixture: ComponentFixture<ResumenMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
