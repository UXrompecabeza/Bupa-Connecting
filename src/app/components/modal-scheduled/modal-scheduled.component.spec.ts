import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScheduledComponent } from './modal-scheduled.component';

describe('ModalScheduledComponent', () => {
  let component: ModalScheduledComponent;
  let fixture: ComponentFixture<ModalScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
