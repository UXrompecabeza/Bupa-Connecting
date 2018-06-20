import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-horaprecio',
  templateUrl: './reserva-horaprecio.component.html',
  styleUrls: ['./reserva-horaprecio.component.scss']
})
export class ReservaHoraprecioComponent implements OnInit {

  constructor() { }

  filtroEspecialidad: any[];
  filtroMedicos: any[];

  isClassVisible: false;

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
