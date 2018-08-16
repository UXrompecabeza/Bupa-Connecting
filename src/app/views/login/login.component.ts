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

  rut(event) {
    // console.log(event.target)
    let input = event.target;
    var value = input.value,
    value = value.split('.').join('');
    value = value.split('-').join('');
    if (value.length > 1) {
        value = value.substring(0, value.length - 1) + '-' + value.substring(value.length - 1, value.length);
    }
    if (value.length > 5) {
      value = value.substring(0, value.length - 5) + '.' + value.substring(value.length - 5, value.length);
    }
    if (value.length > 9) {
      value = value.substring(0, value.length - 9) + '.' + value.substring(value.length - 9, value.length);
    }
  
    input.value = value;
  }
}
