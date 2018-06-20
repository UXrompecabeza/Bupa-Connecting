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

  hourSelected: boolean = true;

  isClassVisible: true;

  doctors: any[] = [
    {
      info: {
        doctor: 'Dr. Eduardo Navarro Alarcón',
        specialty: 'Medicina General',
        center: ['Integramédica Manquehue'],
        image: './assets/icons/perfil-doctor.png'
      }
    }, {
      info: {
        doctor: 'Dr. María Nuñez Muñoz',
        center: ['Integramédica Las Condes'],
        specialty: 'Medicina General',
        image: './assets/icons/perfil-doctora.png'
      }
    }, {
      info: {
        doctor: 'Dr. Hilda Ponce González',
        center: ['Clínica Bupa La Florida'],
        specialty: 'Medicina General',
        image: './assets/icons/perfil-doctora.png'
      }
    }, {
      info: {
        doctor: 'Dr. Pedro Hidalgo Pino',
        center: ['Clínica Bupa Santiago'],
        specialty: 'Medicina General',
        image: './assets/icons/perfil-doctor.png'
      }
    }
  ];
  hoursAvailable:any[] = ['08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45']
}
