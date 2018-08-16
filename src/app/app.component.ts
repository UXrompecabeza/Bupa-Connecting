import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  noLogin:boolean = true;
  menuInicial:boolean = true;
  menuAsignados:boolean = false;
  menuPromociones:boolean = false;
  agenda:boolean = false;

  hideLogin() {
    this.noLogin = false;
  }
  mostrarAgenda() {
    this.menuInicial = false;
    this.menuAsignados = false;
    this.menuPromociones = false;
    this.agenda = true;
  }
  mostrarAsignados(){
    this.menuInicial = false;
    this.menuAsignados = true;
    this.menuPromociones = false;
    this.agenda = false;
  }
  mostrarPromociones(){
    this.menuInicial = false;
    this.menuPromociones = true;
    this.menuAsignados = false;
    this.agenda = false;
  }
  mostrarInicio(){
    this.menuInicial = true;
    this.menuPromociones = false;
    this.menuAsignados = false;
    this.agenda = false;
  }
  @ViewChild(SidebarComponent) 
  private sidebar:SidebarComponent;

  recibeClickBurguer() {
    this.sidebar.openSidebar();
  }
}