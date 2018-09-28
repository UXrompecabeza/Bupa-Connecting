import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-asignados',
  templateUrl: './menu-asignados.component.html',
  styleUrls: ['./menu-asignados.component.scss']
})
export class MenuAsignadosComponent implements OnInit {

  constructor() { }

  filtrosOn: boolean = false;

  prevision: any[] = [
    "CruzBlanca",
    "FONASA",
    "Colmena",
    "Banmédica",
    "F. BancoEstado",
    "CruzBlanca",
    "FONASA",
    "Colmena",
    "Banmédica",
    "F. BancoEstado",
    "CruzBlanca",
    "FONASA",
    "Colmena",
    "Banmédica",
    "F. BancoEstado"
  ]

  centros: any[] = [
    "Alto Las Condes",
    "Los Leones",
    "Barcelona",
    "Providencia",
    "Manquehue",
    "Alto Las Condes",
    "Los Leones",
    "Barcelona",
    "Providencia",
    "Manquehue",
    "Alto Las Condes",
    "Los Leones",
    "Barcelona",
    "Providencia",
    "Manquehue",
  ]

  clean() {
    let checkbox = document.getElementsByClassName("filterCheck");
    for (let i = 0; i < checkbox.length; i++) {
      let aCheck =  <HTMLInputElement> checkbox[i];
      aCheck.checked = false;
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  ngOnInit() {
  }

}
