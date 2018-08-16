import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-promociones',
  templateUrl: './menu-promociones.component.html',
  styleUrls: ['./menu-promociones.component.scss']
})
export class MenuPromocionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  promociones:any = [
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Descuento',
        class: 'magenta',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    },
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Promoción',
        class: 'orange',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    },
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Invitación',
        class: 'mint',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    },
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Descuento',
        class: 'purple',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    },
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Descuento',
        class: 'green',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    },
    {
      info: {
        img: 'assets/imgs/promo.png',
        titulo: 'Descuento',
        class: 'magenta',
        cuerpo: 'Agendando cualquier exámen en la',
        destacado: ' clínica Bupa Santiago'
      }
    }
  ]

}
