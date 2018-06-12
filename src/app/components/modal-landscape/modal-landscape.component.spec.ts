import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLandscapeComponent } from './modal-landscape.component';

describe('ModalLandscapeComponent', () => {
  let component: ModalLandscapeComponent;
  let fixture: ComponentFixture<ModalLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
