import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarSlideService {
  public toggleSidebar: EventEmitter<any> = new EventEmitter();
}
