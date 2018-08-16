import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEmbudoComponent } from './filtro-embudo.component';

describe('FiltroEmbudoComponent', () => {
  let component: FiltroEmbudoComponent;
  let fixture: ComponentFixture<FiltroEmbudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEmbudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEmbudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
