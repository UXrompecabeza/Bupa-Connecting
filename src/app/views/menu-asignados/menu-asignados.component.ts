import { Component, OnInit, ViewChild } from '@angular/core';
import { TableAsignadosComponent } from '../../components/table-asignados/table-asignados.component';

@Component({
  selector: 'app-menu-asignados',
  templateUrl: './menu-asignados.component.html',
  styleUrls: ['./menu-asignados.component.scss']
})
export class MenuAsignadosComponent implements OnInit {

  constructor() { }

  filtrosOn: boolean = false;

  prevision: any[] = [
    {name:"CruzBlanca",previsionId:"pre-1"},
    {name:"FONASA",previsionId:"pre-4"},
    {name:"Colmena",previsionId:"pre-3"},
    {name:"Banmédica",previsionId:"pre-2"},
    {name:"F. BancoEstado",previsionId:"pre-5"},
    {name:"CruzBlanca",previsionId:"pre-1"},
    {name:"FONASA",previsionId:"pre-4"},
    {name:"Colmena",previsionId:"pre-3"},
    {name:"Banmédica",previsionId:"pre-2"},
    {name:"F. BancoEstado",previsionId:"pre-5"},
    {name:"CruzBlanca",previsionId:"pre-1"},
    {name:"FONASA",previsionId:"pre-4"},
    {name:"Colmena",previsionId:"pre-3"},
    {name:"Banmédica",previsionId:"pre-2"},
    {name:"F. BancoEstado",previsionId:"pre-5"}
  ]

  centros: any[] = [
    {name:"Alto Las Condes",centroId:"cen-3"},
    {name:"Los Leones",centroId:"cen-1"},
    {name:"Barcelona",centroId:"cen-4"},
    {name:"Providencia",centroId:"cen-5"},
    {name:"Manquehue",centroId:"cen-2"},
    {name:"Alto Las Condes",centroId:"cen-3"},
    {name:"Los Leones",centroId:"cen-1"},
    {name:"Barcelona",centroId:"cen-4"},
    {name:"Providencia",centroId:"cen-5"},
    {name:"Manquehue",centroId:"cen-2"},
    {name:"Alto Las Condes",centroId:"cen-3"},
    {name:"Los Leones",centroId:"cen-1"},
    {name:"Barcelona",centroId:"cen-4"},
    {name:"Providencia",centroId:"cen-5"},
    {name:"Manquehue",centroId:"cen-2"}
  ]

  clean() {
    let checkbox = document.getElementsByClassName("filterCheck");
    for (let i = 0; i < checkbox.length; i++) {
      let aCheck =  <HTMLInputElement> checkbox[i];
      aCheck.checked = false;
    }
  }

  filtrar() {
    let filter = document.getElementsByClassName("filterCheck");
    this.filterCheck = []
    for (let i = 0; i < filter.length; i++) {
      let aCheck =  <HTMLInputElement> filter[i];
      if(aCheck.checked) {
        this.filterCheck.push(aCheck.value)
      }
    }
  }
  
  filterCheck: any[] = [];

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  @ViewChild(TableAsignadosComponent) 
  private asignados:TableAsignadosComponent;

  filterActivate() {
    this.asignados.filtrarLista();
  }

  ngOnInit() {
  }

}
