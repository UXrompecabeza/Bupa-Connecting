import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScheduledFailComponent } from './modal-scheduled-fail.component';

describe('ModalScheduledFailComponent', () => {
  let component: ModalScheduledFailComponent;
  let fixture: ComponentFixture<ModalScheduledFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScheduledFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScheduledFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
