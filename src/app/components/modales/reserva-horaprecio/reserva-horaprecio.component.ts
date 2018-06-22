import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-horaprecio',
  templateUrl: './reserva-horaprecio.component.html',
  styleUrls: ['./reserva-horaprecio.component.scss']
})
export class ReservaHoraprecioComponent implements OnInit {

  constructor() { }

  daySelected: boolean = false;
  
  filtroEspecialidad: any[];
  filtroMedicos: any[];

  next: boolean = false;
  next2: boolean = false;
  next3: boolean = false;
  calendar: boolean = false;
  calendar2: boolean = false;
  calendar3: boolean = false;

    ngOnInit() {
    //   this.filtroEspecialidad = [
    //     { "placeholder": "Especialidad *", "option": ["1","2","3","4","5"] },
    //     { "placeholder": "Prestación *", "option": ["Fonasa","Isapre Cruz Blanca"] },
    //     { "placeholder": "Región", "option": ["RM","I","II","III","IV","V"] },
    //     { "placeholder": "Comuna", "option": "AS" },
    //     { "placeholder": "Centro médico *", "option": "AD" }
    // ]
    //   this.filtroMedicos = [
    //     { "placeholder": "Nombre del médico *", "option": 
    //     ["AF","HI","OJ","JI"] },
    //     { "placeholder": "Especialidad *", "option": ["1","2","3","4","5"] },
    //     { "placeholder": "Prestación *", "option": ["Fonasa","Isapre Cruz Blanca"] },
    //     { "placeholder": "Región", "option": ["RM","I","II","III","IV","V"] },
    //     { "placeholder": "Comuna", "option": "AS" },
    //     { "placeholder": "Centro médico *", "option": "AD" }
    // ]
  }
}
