import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIndicationsBack2newComponent } from './modal-indications-back2new.component';

describe('ModalIndicationsBack2newComponent', () => {
  let component: ModalIndicationsBack2newComponent;
  let fixture: ComponentFixture<ModalIndicationsBack2newComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIndicationsBack2newComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIndicationsBack2newComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
