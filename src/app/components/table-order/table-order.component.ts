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
