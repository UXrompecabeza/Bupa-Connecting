import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingreso-rut',
  templateUrl: './ingreso-rut.component.html',
  styleUrls: ['./ingreso-rut.component.scss']
})
export class IngresoRutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() dismissLoginEmpty:EventEmitter<any> = new EventEmitter();

  showPaciente() {
    this.dismissLoginEmpty.emit();
  }

}
