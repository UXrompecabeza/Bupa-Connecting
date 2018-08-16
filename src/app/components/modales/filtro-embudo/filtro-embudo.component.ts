import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-embudo',
  templateUrl: './filtro-embudo.component.html',
  styleUrls: ['./filtro-embudo.component.scss']
})
export class FiltroEmbudoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

    
  choosenOption(event) {
    let option = event.target.attributes[1].value;
    if(option === 'card-a') {
      event.target.attributes[1].value = 'activeCard';
    } else {
      event.target.attributes[1].value = 'card-a';
    }
  }

}
