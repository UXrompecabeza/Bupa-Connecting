import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-table-order',
  templateUrl: './table-order.component.html',
  styleUrls: ['./table-order.component.scss']
})
export class TableOrderComponent implements OnInit {

  private _isOpen : boolean = true;
  isOpen:boolean = true
  closeAllTips(): void {
    this.tips.forEach((tip) => {
      tip.isOpen = false;
    });
  }

  showContent(tip) {
    if (!tip.isOpen) {
      this.closeAllTips();
    }
    tip.isOpen = !tip.isOpen;
  }

  order: string = 'info.name';
  reverse: boolean = false;
  tips : any[] = [
    {
      order: 1,
      info: {
        date: '22/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, {
      order: 2,
      info: {
        date: '25/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 3,
      info: {
        date: '23/02/18',
        doctor: 'Hilda Ordenes Durán'
      }
    }, {
      order: 4,
      info: {
        date: '16/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 5,
      info: {
        date: '05/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 6,
      info: {
        date: '02/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 7,
      info: {
        date: '25/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 8,
      info: {
        date: '25/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 9,
      info: {
        date: '25/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 10,
      info: {
        date: '25/02/18',
        doctor: 'Elena San Matín Hidalgo'
      }
    }, {
      order: 11,
      info: {
        date: '24/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, {
      order: 12,
      info: {
        date: '28/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, {
      order: 13,
      info: {
        date: '13/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, {
      order: 14,
      info: {
        date: '19/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, {
      order: 15,
      info: {
        date: '21/02/18',
        doctor: 'Fernando Arredondo Salgado'
      }
    }, 
  ];
  sortedCollection: any[];
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.tips, 'info.name');
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
  }
}
