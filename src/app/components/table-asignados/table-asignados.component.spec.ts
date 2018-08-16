import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAsignadosComponent } from './table-asignados.component';

describe('TableAsignadosComponent', () => {
  let component: TableAsignadosComponent;
  let fixture: ComponentFixture<TableAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAsignadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
