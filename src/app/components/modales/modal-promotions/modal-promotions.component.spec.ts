import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromotionsComponent } from './modal-promotions.component';

describe('ModalPromotionsComponent', () => {
  let component: ModalPromotionsComponent;
  let fixture: ComponentFixture<ModalPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
