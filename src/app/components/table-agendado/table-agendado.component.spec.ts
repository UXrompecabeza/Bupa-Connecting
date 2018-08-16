import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgendadoComponent } from './table-agendado.component';

describe('TableAgendadoComponent', () => {
  let component: TableAgendadoComponent;
  let fixture: ComponentFixture<TableAgendadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAgendadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgendadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
