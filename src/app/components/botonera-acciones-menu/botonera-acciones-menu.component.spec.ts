import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneraAccionesMenuComponent } from './botonera-acciones-menu.component';

describe('BotoneraAccionesMenuComponent', () => {
  let component: BotoneraAccionesMenuComponent;
  let fixture: ComponentFixture<BotoneraAccionesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoneraAccionesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneraAccionesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
