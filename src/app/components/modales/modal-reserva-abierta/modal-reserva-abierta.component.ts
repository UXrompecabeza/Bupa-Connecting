import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-reserva-abierta',
  templateUrl: './modal-reserva-abierta.component.html',
  styleUrls: ['./modal-reserva-abierta.component.scss']
})
export class ModalReservaAbiertaComponent implements OnInit {

  constructor() { }

  daySelected: boolean = false;
  next: boolean = false;
  next2: boolean = true;
  next3: boolean = true;
  calendar1: boolean = false;
  calendar2: boolean = false;
  calendar3: boolean = false;
  resumen: boolean = false;
  resumen2: boolean = false;

  semana: boolean = true;
  semana2: boolean = false;
  semana3: boolean = false;
  
  filtroEspecialidad: any[];
  filtroMedicos: any[];

  ngOnInit() {
    this.filtroEspecialidad = [
      { "placeholder": "Especialidad *", "option": ["1","2","3","4","5"] },
      { "placeholder": "Prestación *", "option": ["Fonasa","Isapre Cruz Blanca"] },
      { "placeholder": "Región", "option": ["RM","I","II","III","IV","V"] },
      { "placeholder": "Comuna", "option": "AS" },
      { "placeholder": "Centro médico *", "option": "AD" }
  ]
      this.filtroMedicos = [
        { "placeholder": "Nombre del médico *", "option": 
        ["AF","HI","OJ","JI"] },
        { "placeholder": "Especialidad *", "option": ["1","2","3","4","5"] },
        { "placeholder": "Prestación *", "option": ["Fonasa","Isapre Cruz Blanca"] },
        { "placeholder": "Región", "option": ["RM","I","II","III","IV","V"] },
        { "placeholder": "Comuna", "option": "AS" },
        { "placeholder": "Centro médico *", "option": "AD" }
    ]
  }

  campos = ['Nombre del médico', 'Especialidad', 'Prestación', 'Comuna', 'Región', 'Centro médico']

}
