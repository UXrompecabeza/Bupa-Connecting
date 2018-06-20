import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartadoBxespecialidadComponent } from './apartado-bxespecialidad.component';

describe('ApartadoBxespecialidadComponent', () => {
  let component: ApartadoBxespecialidadComponent;
  let fixture: ComponentFixture<ApartadoBxespecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartadoBxespecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartadoBxespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
