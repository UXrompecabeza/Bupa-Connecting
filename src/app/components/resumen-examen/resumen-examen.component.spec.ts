import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenExamenComponent } from './resumen-examen.component';

describe('ResumenExamenComponent', () => {
  let component: ResumenExamenComponent;
  let fixture: ComponentFixture<ResumenExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
