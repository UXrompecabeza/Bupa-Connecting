import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartado-bxespecialidad',
  templateUrl: './apartado-bxespecialidad.component.html',
  styleUrls: ['./apartado-bxespecialidad.component.scss']
})
export class ApartadoBxespecialidadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hourSelected: boolean = false;

  filtros: any[] = [
    {
      specialty: 'Medicina General',
      center: 'Integramédica Manquehue'
    }
  ]

  doctors: any[] = [
    {
      info: {
        doctor: 'Dr. Eduardo Navarro Alarcón'
      }
    }, {
      info: {
        doctor: 'Dr. María Nuñez Muñoz'
      }
    }, {
      info: {
        doctor: 'Dr. Hilda Ponce González'
      }
    }, {
      info: {
        doctor: 'Dr. Pedro Hidalgo Pino'
      }
    }
  ];
  hoursAvailable:any[] = ['08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45']
  hoursAvailableAfternoon:any[] = ['14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45']

  close() {
    this.hourSelected = true;
  }

  move(event) {
    var element = event.target.parentElement.parentElement;
    console.log(element);
    setTimeout(function(){ 
        element.scrollIntoView({behavior: "smooth", inline: "center"})}, 1000);
  }
}
