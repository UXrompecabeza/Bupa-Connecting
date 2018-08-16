import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prestacion = [
    {id: 1, name: 'Cruz Blanca'},
    {id: 2, name: 'FONASA'},
    {id: 3, name: 'Colmena'},
    {id: 4, name: 'Banmédica'},
    {id: 5, name: 'Consalud'}
  ];
  genero = [
    {id: 1, name: 'Mujer'},
    {id: 2, name: 'Hombre'},
    {id: 3, name: 'Otro'}
  ];
  nacionalidad = [
    {id: 1, name: 'Chilena'},
    {id: 1, name: 'Venezolana'},
    {id: 2, name: 'Colombiana'},
    {id: 1, name: 'Haitiana'},
    {id: 2, name: 'Argentina'}
  ];
  region = [
    {id: 0, name: 'Región Metropolitana de Santiago'},
    {id: 1, name: 'Región de Arica y Parinacota'},
    {id: 2, name: 'Región de Tarapacá'},
    {id: 3, name: 'Región de Antofagasta'},
    {id: 4, name: 'Región de Atacama'},
    {id: 5, name: 'Región de Coquimbo'},
    {id: 6, name: 'Región de Valparaiso'},
    {id: 7, name: 'Región del Libertador General Bernardo OHiggins'},
    {id: 8, name: 'Región del Maule'},
    {id: 9, name: 'Región del Biobío'},
    {id: 10, name: 'Región de la Araucanía'},
    {id: 11, name: 'Región de los Ríos'},
    {id: 12, name: 'Región de los Lagos'},
    {id: 13, name: 'Región de Aysén del General Carlos Ibáñez del Campo'},
    {id: 14, name: 'Región de Magallanes y de la Antártica Chilena'}
  ];

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  email(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode == 46) {
      return true;
    }
    if (charCode == 45) {
      return true;
    }
    if (charCode == 64) {
      return true;
    }
    if (charCode == 95) {
      return true;
    }
    if (charCode > 31 && ((charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57))) {
      return false;
    } else {
      return true;
    }
  }

}
