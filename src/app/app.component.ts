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
  agenda:boolean = false;

  hideLogin() {
    this.noLogin = false;
  }
  mostrarAgenda() {
    this.menuInicial = false;
    this.agenda = true;
  }

  @ViewChild(SidebarComponent) sidebar:SidebarComponent;

  recibeClickBurguer() {
    console.log("click en App")
    this.sidebar.openSidebar;
  }
}