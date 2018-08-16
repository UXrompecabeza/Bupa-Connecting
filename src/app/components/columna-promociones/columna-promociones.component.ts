import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna-promociones',
  templateUrl: './columna-promociones.component.html',
  styleUrls: ['./columna-promociones.component.scss']
})
export class ColumnaPromocionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  promociones: any[] = [
    {
      info: {
        titulo: '20% Dcto. en exámenes',
        cuerpo: 'Agendando cualquier examén en la clínica Bupa Santiago.'
      }
    }, 
    {
      info: {
        titulo: '20% Dcto. en Mamografía',
        cuerpo: 'Agendando en cualquiera de nuestras redes Bupa.'
      }
    }, 
    {
      info: {
        titulo: '20% Dcto. en exámenes',
        cuerpo: 'Agendando cualquier examén en la clínica Bupa Santiago.'
      }
    }, 
    {
      info: {
        titulo: '20% Dcto. en Mamografía',
        cuerpo: 'Agendando en cualquiera de nuestras redes Bupa.'
      }
    }, 
    {
      info: {
        titulo: '20% Dcto. en exámenes',
        cuerpo: 'Agendando cualquier examén en la clínica Bupa Santiago.'
      }
    }
  ];

}
