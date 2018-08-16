import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-calendario',
  templateUrl: './filtro-calendario.component.html',
  styleUrls: ['./filtro-calendario.component.scss']
})
export class FiltroCalendarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  choosenCard(event) {
    let card = event.target.childNodes[0].attributes[1].value;
    let allCards = event.target.parentNode.parentNode.parentNode.parentNode;
    if(card === 'card-span') {
      event.target.childNodes[0].attributes[1].value = 'activeCard';
    } else {
      event.target.childNodes[0].attributes[1].value = 'card-span';
    }
  }
}
