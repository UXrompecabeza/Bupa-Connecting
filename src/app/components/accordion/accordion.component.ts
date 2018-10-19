import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnChanges {

  ordenes: any[] = [
    {
      exam: ['Exámen de laboratorio de sangre'],
      indication: ['Leer indicaciones'],
      icon: ['./assets/icons/button_multi.svg'],
      opacity: ['opacity'],
      options: [{name:'Enviar indicaciones',block:'no'},{name:'Rechazar asesoría',block:'yes1'}]
    },
  ];
  ordenes2: any[] = [
    {
      exam: ['Endoscopia digestiva gastroscópica de mitad superior'],
      indication: ['Leer indicaciones'],
      icon: ['./assets/icons/button_multi.svg'],
      opacity: '',
      options: [{name:'Rechazar asesoría',block:'yes'}]
    }, 
    {
      exam: ['Resonancia magnética espalda'],
      indication: ['Leer indicaciones'],
      icon: ['./assets/icons/button_multi.svg'],
      opacity: '',
      options: [{name:'Rechazar asesoría',block:'yes'}]
    }, 
  ];
  ordenes3: any[] = [
    {
      exam: ['Orden quirúrgica'],
      indication: ['Pedir presupuesto'],
      icon: ['./assets/icons/button_multi.svg'],
      opacity: ['opacity'],
      options: [{name:'Pedir presupuesto',block:'no'},{name:'Rechazar asesoría',block:'yes1'}]
    }, 
  ];

  constructor() { }

  ngOnChanges() {
  }

  openPop(event) {
    let pop = event.target.parentNode.parentNode.parentNode.parentNode.childNodes[1];
    let accordion = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    pop.classList.toggle("active");
    accordion.classList.toggle("scrollOff");
  }
  closePop(event) {
    let pop = event.target.parentNode.parentNode;
    let accordion = event.target.parentNode.parentNode.parentNode.parentNode;
    pop.classList.toggle("active");
    accordion.classList.toggle("scrollOff");
  }
  blockAcc(event,order) {
    // console.log(event.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1])
    let ruta = event.target.parentNode.parentNode.parentNode.childNodes[0]
    if(order==="yes") {
      let attrLabel = ruta.childNodes[1].attributes[1].value.split(' ');
      let input = ruta.childNodes[0];
      if(attrLabel[1] === 'on'){
        input.disabled = true;
        ruta.childNodes[1].attributes[1].value = attrLabel[0] +' off';
      } else {
        input.disabled = false;
        ruta.childNodes[1].attributes[1].value = attrLabel[0] +' on';
      }
    } else if(order==="yes1") {
      let attrLabel = ruta.childNodes[1].attributes[1].value.split(' ');
      if(attrLabel[1] === 'on'){
        ruta.childNodes[1].attributes[1].value = attrLabel[0] +' off';
      } else {
        ruta.childNodes[1].attributes[1].value = attrLabel[0] +' on';
      }
    }
  }

  noMolestar(event) {
    let attrLabel = event.target.parentNode.childNodes[1].attributes[1].value.split(' ');
    let input = event.target.parentNode.childNodes[0];
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
