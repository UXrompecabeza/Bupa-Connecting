import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-pacientes',
  templateUrl: './carrusel-pacientes.component.html',
  styleUrls: ['./carrusel-pacientes.component.scss']
})
export class CarruselPacientesComponent implements OnInit {

  constructor() { }

  patient: any[] = [
    {
      logo: 'assets/icons/icon-woman.svg',
      // logo-hombre: 'assets/icons/icon_hombre.svg',
      // logo-sinGenero: 'assets/icons/icon_singenero.svg',
      name: 'Francisca Andrea Velasco Ferrada',
      genre: 'M',
      age: '30 años, 2 meses y 8 días',
      mail: 'frnacisca.v@gmail.com',
      cel: '+569 6222 4567',
      rut: '16.456.789-9',
      prev: 'Isapre CruzBlanca'
    }
  ];

  ngOnInit() {
  }

}
