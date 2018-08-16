import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table-agendado',
  templateUrl: './table-agendado.component.html',
  styleUrls: ['./table-agendado.component.scss']
})
export class TableAgendadoComponent implements OnInit {

  ngOnInit() {
  }

  order: string = 'info.doctor';
  reverse: boolean = false;
  collection: any[] = [
    {
      info: {
        order: 'Endoscopía digestiva gastroscópica de mitad superior',
        prestador: ['Integramédica Manquehue','Av. Manquehue 123, Las Condes'],
        date: ['05/05/2018'],
        hour: ['10:15 am','08/05/2018'],
        copago: '48.500',
        doctor: 'Eduardo Navarro Alarcón',
        image: './assets/icons/icon-cv-doctor.svg',
        medico: 'Javier Solís Navarrete',
        ocm: '12244566847659'
      }
    },
    {
      info: {
        order: 'Consulta gastroenterología',
        prestador: ['Integramédica Las Condes','Las Condes noroeste segundo 123, Las Condes'],
        date: ['05/05/2018'],
        hour: ['11:15 am','09/05/2018'],
        copago: '58.500',
        doctor: 'María Nuñez Muñoz',
        image: './assets/icons/icon-cv-doctor.svg',
        medico: 'Javier Solís Navarrete',
        ocm: '12244566847659'
      }
    },
    {
      info: {
        order: 'Orden quirúrgica',
        prestador: ['Clínica Bupa Santiago','Av La Florida 123, La Florida'],
        date: ['05/05/2018'],
        hour: ['9:15 am','12/05/2018'],
        copago: '40.500',
        doctor: 'Pedro Hidalgo Pino',
        image: './assets/icons/icon-cv-doctor.svg',
        medico: 'Javier Solís Navarrete',
        ocm: '12244566847659'
      }
    }, 
  ];
  sortedCollection: any[];
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.collection, 'info.name');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  openPop(event) {
    let target = event.target.parentElement.nextSibling;
    target.classList.toggle("show")
  }
}
