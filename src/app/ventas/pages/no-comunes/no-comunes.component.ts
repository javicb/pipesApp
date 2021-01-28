import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre = 'Javier';
  genero = 'masculino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
