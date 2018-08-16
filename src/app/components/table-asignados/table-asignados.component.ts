import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table-asignados',
  templateUrl: './table-asignados.component.html',
  styleUrls: ['./table-asignados.component.scss']
})
export class TableAsignadosComponent implements OnInit {

  ngOnInit() {
  }

  order: string = 'info.doctor';
  reverse: boolean = false;
  collection: any[] = [
    {
      info: {
        estado: 'Llamar en otro momento',
        telefono: '97832755',
        nombre: 'Francisca Velasco Ferrada',
        edad: '32',
        rut: '8.770.751-5',
        prevision: 'Isapre Cruz Blanca',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Eduardo Enriquez Rodriguez',
        edad: '52',
        rut: '9.345.678-9',
        prevision: 'Isapre Colmena',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Paulina López Hernandez ',
        edad: '25',
        rut: '19.345.678-9',
        prevision: 'Fonasa',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Gestionado',
        telefono: '97832755',
        nombre: 'Camila Zúñiga Sepúlveda',
        edad: '39',
        rut: '5.345.678-9',
        prevision: 'Isapre Banmédica',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Carmen Mejias Hidalgo',
        edad: '33',
        rut: '15.345.678-9',
        prevision: 'Isapre Fundación Banco Estado',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Jaime Enriquez Rodriguez',
        edad: '21',
        rut: '25.345.678-9',
        prevision: 'Isapre Cruz Blanca',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Paulina López Hernandez ',
        edad: '56',
        rut: '18.770.751-5',
        prevision: 'Isapre Colmena',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Camila Zúñiga Sepúlveda',
        edad: '42',
        rut: '13.770.751-5',
        prevision: 'Fonasa',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Pendiente',
        telefono: '97832755',
        nombre: 'Carmen Mejias Hidalgo',
        edad: '41',
        rut: '13.970.751-5',
        prevision: 'Isapre Banmédica',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'No quiere contacto',
        telefono: '97832755',
        nombre: 'Roberto Enriquez Rodriguez',
        edad: '34',
        rut: '15.345.678-9',
        prevision: 'Isapre Fundación Banco Estado',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Llamar en otro momento',
        telefono: '97832755',
        nombre: 'Paulina López Hernandez ',
        edad: '72',
        rut: '5.345.678-9',
        prevision: 'Fonasa',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
      }
    },
    {
      info: {
        estado: 'Llamar en otro momento',
        telefono: '97832755',
        nombre: 'Camila Zúñiga Sepúlveda',
        edad: '18',
        rut: '21.345.678-9',
        prevision: 'Isapre Banmédica',
        centro: 'Alto las condes',
        op: '3',
        espera: '0'
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

}
