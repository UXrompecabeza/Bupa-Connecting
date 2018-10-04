import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table-asignados',
  templateUrl: './table-asignados.component.html',
  styleUrls: ['./table-asignados.component.scss']
})

export class TableAsignadosComponent implements OnInit {

  @Input() filterCheck : string[];
  
  ngOnInit() {
    this.newCollection = this.collection;
  }
  filtrarLista() {
    let filterCheck = this.filterCheck;
    let filterCollection = [];
    for (let f = 0; f < filterCheck.length; f++) {
      if(filterCheck[f].startsWith("es")) {
        let collectionFilterES = this.collection.filter(function(collection) {
          return collection.estadoId === filterCheck[f];
        });
        filterCollection.push(collectionFilterES);
      } else if (filterCheck[f].startsWith("cen")) {
        let collectionFilterCEN = this.collection.filter(function(collection) {
          return collection.centroId === filterCheck[f];
        });
        filterCollection.push(collectionFilterCEN);
      } else if (filterCheck[f].startsWith("pre")) {
        let collectionFilterPRE = this.collection.filter(function(collection) {
          return collection.previsionId === filterCheck[f];
        });
        filterCollection.push(collectionFilterPRE);
      }
    }
    let filterString=[]
    for (let i = 0; i < filterCollection.length; i++) {
      for (let j = 0; j< filterCollection[i].length; j++) {
        filterString.push(JSON.stringify(filterCollection[i][j]))
      }
    }
    let uniqueArray = filterString.filter(function(item, pos) {
        return filterString.indexOf(item) == pos;
    })
    let objFiltered = []
    for (let g = 0; g < uniqueArray.length; g++) {
      objFiltered.push(JSON.parse(uniqueArray[g]))
    }
    this.newCollection = objFiltered;
  }

  newCollection: any[] = [];

  order: string = 'estado';
  reverse: boolean = false;
  collection: any[] = [
    {
      estado: 'Llamar en otro momento',
      estadoId: 'es-4',
      telefono: '97832755',
      nombre: 'Francisca Velasco Ferrada',
      edad: '32',
      rut: '8.770.751-5',
      prevision: 'Isapre CruzBlanca',
      previsionId: 'pre-1',
      centro: 'Alto las condes',
      centroId: 'cen-3',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Eduardo Enriquez Rodriguez',
      edad: '52',
      rut: '9.345.678-9',
      prevision: 'Isapre Colmena',
      previsionId: 'pre-3',
      centro: 'Barcelona',
      centroId: 'cen-4',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Paulina López Hernandez ',
      edad: '25',
      rut: '19.345.678-9',
      prevision: 'Fonasa',
      previsionId: 'pre-4',
      centro: 'Providencia',
      centroId: 'cen-5',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Gestionado',
      estadoId: 'es-1',
      telefono: '97832755',
      nombre: 'Camila Zúñiga Sepúlveda',
      edad: '39',
      rut: '5.345.678-9',
      prevision: 'Isapre Banmédica',
      previsionId: 'pre-2',
      centro: 'Providencia',
      centroId: 'cen-5',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Carmen Mejias Hidalgo',
      edad: '33',
      rut: '15.345.678-9',
      prevision: 'Isapre Fundación BancoEstado',
      previsionId: 'pre-5',
      centro: 'Barcelona',
      centroId: 'cen-4',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Jaime Enriquez Rodriguez',
      edad: '21',
      rut: '25.345.678-9',
      prevision: 'Isapre CruzBlanca',
      previsionId: 'pre-1',
      centro: 'Manquehue',
      centroId: 'cen-2',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Paulina López Hernandez ',
      edad: '56',
      rut: '18.770.751-5',
      prevision: 'Isapre Colmena',      
      previsionId: 'pre-3',
      centro: 'Barcelona',
      centroId: 'cen-4',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Camila Zúñiga Sepúlveda',
      edad: '42',
      rut: '13.770.751-5',
      prevision: 'Fonasa',
      previsionId: 'pre-4',
      centro: 'Los Leones',
      centroId: 'cen-1',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Pendiente',
      estadoId: 'es-2',
      telefono: '97832755',
      nombre: 'Carmen Mejias Hidalgo',
      edad: '41',
      rut: '13.970.751-5',
      prevision: 'Isapre Banmédica',
      previsionId: 'pre-2',
      centro: 'Alto las condes',
      centroId: 'cen-3',
      op: '3',
      espera: '0'
    },
    {
      estado: 'No quiere contacto',
      estadoId: 'es-3',
      telefono: '97832755',
      nombre: 'Roberto Enriquez Rodriguez',
      edad: '34',
      rut: '15.345.678-9',
      prevision: 'Isapre Fundación BancoEstado',
      previsionId: 'pre-5',
      centro: 'Manquehue',
      centroId: 'cen-2',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Llamar en otro momento',
      estadoId: 'es-4',
      telefono: '97832755',
      nombre: 'Paulina López Hernandez ',
      edad: '72',
      rut: '5.345.678-9',
      prevision: 'Fonasa',
      previsionId: 'pre-4',
      centro: 'Los Leones',
      centroId: 'cen-1',
      op: '3',
      espera: '0'
    },
    {
      estado: 'Llamar en otro momento',
      estadoId: 'es-4',
      telefono: '97832755',
      nombre: 'Camila Zúñiga Sepúlveda',
      edad: '18',
      rut: '21.345.678-9',
      prevision: 'Isapre Banmédica',
      previsionId: 'pre-2',
      centro: 'Barcelona',
      centroId: 'cen-4',
      op: '3',
      espera: '0'
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
