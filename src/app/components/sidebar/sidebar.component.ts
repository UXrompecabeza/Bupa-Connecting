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
  @Output() dismissMenu2:EventEmitter<any> = new EventEmitter();
  @Output() dismissMenu3:EventEmitter<any> = new EventEmitter();
  @Output() dismissMenu4:EventEmitter<any> = new EventEmitter();
  abrirAgenda() {
    this.dismissMenu.emit();
  }
  abrirAsignados() {
    this.dismissMenu2.emit();
  }
  abrirPromociones() {
    this.dismissMenu3.emit();
  }
  abrirInicio() {
    this.dismissMenu4.emit();
  }

  sidebar: boolean = false;
  openSidebar(){
    console.log("clickSidebar")
    this.sidebar = !this.sidebar;       
  }
}
