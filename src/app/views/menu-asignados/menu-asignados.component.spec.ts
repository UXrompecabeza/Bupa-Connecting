import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsignadosComponent } from './menu-asignados.component';

describe('MenuAsignadosComponent', () => {
  let component: MenuAsignadosComponent;
  let fixture: ComponentFixture<MenuAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAsignadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
