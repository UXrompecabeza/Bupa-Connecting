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
        indication: ['Leer indicaciones'],
        class: ['icon_mail icon-accordion'],
        icon: ['./assets/icons/icon-mail-off.svg']
      }
    },
  ];
  ordenes2: any[] = [
    {
      info: {
        exam: ['Endoscopia digestiva gastroscópica de mitad superior'],
        indication: ['Leer indicaciones'],
        class: ['icon_noexam icon-accordion'],
        icon: ['./assets/icons/icon-no-exam-on.svg'] 
      }
    }, 
    {
      info: {
        exam: ['Resonancia magnética espalda'],
        indication: ['Leer indicaciones'],
        class: ['icon_noexam icon-accordion'],
        icon: ['./assets/icons/icon-no-exam-on.svg'] 
      }
    }, 
  ];
  ordenes3: any[] = [
    {
      info: {
        exam: ['Orden quirúrgica'],
        indication: ['Pedir presupuesto'],
        icon: ['./assets/icons/icon-presupuesto-off.svg'] 
      }
    }, 
  ];

  constructor() { }

  ngOnChanges() {
  }

  // desactivar: boolean = true;
  noMolestar(event) {
    let attrLabel = event.target.parentNode.childNodes[1].attributes[1].value.split(' ');
    let input = event.target.parentNode.childNodes[0];
    // console.log(event.target.parentNode.childNodes[0])
    // let className = event.target.parentNode.childNodes[1].attributes[1].value;
    if(attrLabel[1] === 'on'){
      input.disabled = true;
      event.target.parentNode.childNodes[1].attributes[1].value = attrLabel[0] +' off';
    } else {
      input.disabled = false;
      event.target.parentNode.childNodes[1].attributes[1].value = attrLabel[0] +' on';
    }
  }

  sendMail(orden) {
    orden.info.icon = "./assets/icons/icon-mail-on.svg"
  }
  sendPresupuesto(orden) {
    orden.info.icon = "./assets/icons/icon-presupuesto-on.svg"
  }
}
