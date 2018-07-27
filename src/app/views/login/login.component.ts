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

  // @Output() loginChange = new EventEmitter();

  // login() {

  //   this.counter = this.counter + 1;
  //   this.loginChange.emit(this.counter);
  // }
}
