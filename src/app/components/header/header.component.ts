import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SidebarSlideService } from './../../sidebar-slide.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() clickMenuBurguer:EventEmitter<any> = new EventEmitter();

  clickMenu() {
    this.clickMenuBurguer.emit();
  }

}
