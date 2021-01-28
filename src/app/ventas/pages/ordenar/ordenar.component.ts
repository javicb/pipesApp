import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas = true;
  orderBy = 'sin orden';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Dr Strange',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarMayusculas(): void {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(value: string): void {
    this.orderBy = value;
  }

}
