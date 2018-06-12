import { TestBed, inject } from '@angular/core/testing';

import { SidebarSlideService } from './sidebar-slide.service';

describe('SidebarSlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarSlideService]
    });
  });

  it('should be created', inject([SidebarSlideService], (service: SidebarSlideService) => {
    expect(service).toBeTruthy();
  }));
});
