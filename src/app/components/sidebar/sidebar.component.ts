import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() { };

  ngOnInit() {
  }

  @Output() dismissMenu:EventEmitter<any> = new EventEmitter();

  abrirAgenda() {
    this.dismissMenu.emit();
  }
  sidebar: boolean = false;
  openSidebar(){
    console.log("clickSidebar")
    this.sidebar = !this.sidebar;       
  }
}
