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
        center: ['Integramédica Manquehue','Av. Manquehue 123, Las Condes'],
        date: ['10:15 am','05/05/2018'],
        price: '48.500',
        doctor: 'Eduardo Navarro Alarcón',
        image: './assets/icons/perfil-doctor.png'
      }
    }, {
      info: {
        center: ['Integramédica Las Condes','Las Condes 123, Las Condes'],
        date: ['11:15 am','05/05/2018'],
        price: '58.500',
        doctor: 'María Nuñez Muñoz',
        image: './assets/icons/perfil-doctora.png'
      }
    }, {
      info: {
        center: ['Clínica Bupa Santiago','Av La Florida 123, La Florida'],
        date: ['9:15 am','05/05/2018'],
        price: '40.500',
        doctor: 'Pedro Hidalgo Pino',
        image: './assets/icons/perfil-doctor.png'
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

  ngOnInit() {
  }
}
