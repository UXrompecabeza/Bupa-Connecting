import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIndicationsComponent } from './modal-indications.component';

describe('ModalIndicationsComponent', () => {
  let component: ModalIndicationsComponent;
  let fixture: ComponentFixture<ModalIndicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIndicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
