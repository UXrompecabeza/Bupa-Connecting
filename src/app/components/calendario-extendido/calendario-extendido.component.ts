import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario-extendido',
  templateUrl: './calendario-extendido.component.html',
  styleUrls: ['./calendario-extendido.component.scss']
})
export class CalendarioExtendidoComponent implements OnInit {

  mayo: boolean = true;
  junio: boolean = false;
  julio: boolean = false;
  junio2: boolean = false;
  mayo2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
