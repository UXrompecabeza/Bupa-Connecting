import { Component, OnInit, OnChanges } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnChanges {

  ordenes: any[] = [
    {
      info: {
        exam: ['Exámen de laboratorio de sangre'],
        indication: ['Leer indicaciones']
      }
    },
  ];
  ordenes2: any[] = [
    {
      info: {
        exam: ['Endoscopia digestiva gastroscópica de mitad superior'],
        indication: ['Leer indicaciones']      
      }
    }, {
      info: {
        exam: ['Resonancia magnética espalda'],
        indication: ['Leer indicaciones']
      }
    }, 
  ];

  constructor() { }

  ngOnChanges() {
  }

}
