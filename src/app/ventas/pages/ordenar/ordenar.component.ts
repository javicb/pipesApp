import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(): void {
    this.enMayusculas = !this.enMayusculas;
  }

}
