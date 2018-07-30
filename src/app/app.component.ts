import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  login: boolean = true;

  noLogin:boolean = true;
  hideLogin() {
    this.noLogin = false;
  }
}
