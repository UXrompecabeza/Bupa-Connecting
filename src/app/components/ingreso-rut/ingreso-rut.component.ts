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

  rut(event) {
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
