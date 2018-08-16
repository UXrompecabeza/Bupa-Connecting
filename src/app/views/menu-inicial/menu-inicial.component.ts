import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.scss']
})
export class MenuInicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginSuccess: boolean = false;
  noLoginEmpty:boolean = false;
  home:boolean = true;

  changeLogin() {
    this.noLoginEmpty = false;
    this.loginSuccess = true;
    this.home = false;
  }

}
