import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-horaprecio',
  templateUrl: './reserva-horaprecio.component.html',
  styleUrls: ['./reserva-horaprecio.component.scss']
})
export class ReservaHoraprecioComponent implements OnInit {

  constructor() { }

  daySelected: boolean = false;

  next: boolean = false;
  next2: boolean = false;
  next3: boolean = false;
  calendar: boolean = false;
  calendar2: boolean = false;
  calendar3: boolean = false;

    ngOnInit() {
  }

  doctor = [
    {id: 1, name: 'Karen Medina'},
    {id: 2, name: 'Úrsula Barros'},
    {id: 3, name: 'Orlando Fernandez'},
    {id: 4, name: 'Samuel Mendez'},
    {id: 5, name: 'Patricia Oyarzún'},
    {id: 6, name: 'Olga Klein'},
    {id: 7, name: 'Fernanda Gomez'},
    {id: 8, name: 'Norberto Brown'},
    {id: 9, name: 'Gastón Lara'},
    {id: 10, name: 'Dennise Kant'}
  ];
  especialidad = [
    {id: 1, name: 'Medicina'},
    {id: 2, name: 'Cardiología'},
    {id: 3, name: 'Ginecología'},
    {id: 4, name: 'Salud Mental'},
    {id: 5, name: 'Pediatría'},
    {id: 6, name: 'Otorrino'},
    {id: 7, name: 'Oftalmología'},
    {id: 8, name: 'Neurología'},
    {id: 9, name: 'Gastroenterología'},
    {id: 10, name: 'Dermatología'}
  ];
  prestacion = [
    {id: 1, name: 'Cruz Blanca'},
    {id: 2, name: 'FONASA'},
    {id: 3, name: 'Colmena'},
    {id: 4, name: 'Banmédica'},
    {id: 5, name: 'Consalud'}
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
  comuna = [
    {id: 1, name: 'Las Condes'},
    {id: 2, name: 'La Reina'},
    {id: 3, name: 'Lo Barnechea'},
    {id: 4, name: 'Providencia'},
    {id: 5, name: 'Ñuñoa'}
  ];
  centro = [
    {id: 1, name: 'Integramédica Manquehue'},
    {id: 2, name: 'Integramédica Barcelona'},
    {id: 3, name: 'Integramédica Las Condes'},
    {id: 4, name: 'Integramédica Plaza Egaña'},
    {id: 5, name: 'Integramédica Los Dominicos'}
  ];
}
