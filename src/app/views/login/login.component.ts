import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() dismissLogin:EventEmitter<any> = new EventEmitter();

  dismissWindow() {
    this.dismissLogin.emit();
  }
}
