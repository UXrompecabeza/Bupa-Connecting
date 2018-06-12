import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExamsComponent } from './table-exams.component';

describe('TableExamsComponent', () => {
  let component: TableExamsComponent;
  let fixture: ComponentFixture<TableExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
