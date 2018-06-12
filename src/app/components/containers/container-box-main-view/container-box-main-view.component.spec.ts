import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBoxMainViewComponent } from './container-box-main-view.component';

describe('ContainerBoxMainViewComponent', () => {
  let component: ContainerBoxMainViewComponent;
  let fixture: ComponentFixture<ContainerBoxMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBoxMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBoxMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
