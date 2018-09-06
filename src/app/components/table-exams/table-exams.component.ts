import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table-exams',
  templateUrl: './table-exams.component.html',
  styleUrls: ['./table-exams.component.scss']
})
export class TableExamsComponent implements OnInit {

  order: string = 'info.doctor';
  reverse: boolean = false;
  collection: any[] = [
    {
      info: {
        index: 0,
        center: ['Integramédica Manquehue','Av. Manquehue 123, Las Condes'],
        date: ['05/05/2018'],
        price: '48.500',
        hours: ['10:00','10:30','10:45','11:15'],
        selectedHour: '10:00',
        doctor: 'Eduardo Navarro Alarcón',
        image: './assets/icons/icon-cv-doctor.svg'
      }
    }, {
      info: {
        index: 1,
        center: ['Integramédica Las Condes','Las Condes noroeste segundo 123, Las Condes'],
        date: ['05/05/2018'],
        price: '58.500',
        hours: ['12:00','12:30','12:45','13:15'],
        selectedHour: '12:00',
        doctor: 'María Nuñez Muñoz',
        image: './assets/icons/icon-cv-doctor.svg'
      }
    }, {
      info: {
        index: 2,
        center: ['Clínica Bupa Santiago','Av La Florida 123, La Florida'],
        date: ['05/05/2018'],
        hours: ['15:00','15:30','15:45','17:15'],
        selectedHour: '15:00',
        price: '40.500',
        doctor: 'Pedro Hidalgo Pino',
        image: './assets/icons/icon-cv-doctor.svg'
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

  ngOnInit() {
  }
}
