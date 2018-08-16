import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCalendarioComponent } from './filtro-calendario.component';

describe('FiltroCalendarioComponent', () => {
  let component: FiltroCalendarioComponent;
  let fixture: ComponentFixture<FiltroCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
