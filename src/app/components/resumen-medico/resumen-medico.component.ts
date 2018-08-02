import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen-medico',
  templateUrl: './resumen-medico.component.html',
  styleUrls: ['./resumen-medico.component.scss']
})
export class ResumenMedicoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  editmail: boolean = false;
  changeMail() {
    this.editmail = !this.editmail;
  }

}
