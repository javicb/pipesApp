import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre = 'Javier';
  genero = 'masculino';
  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  // i18nPlural
  clientes = ['Maria', 'Pedro', 'Javier', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  };

  // KeyValue
  persona = {
    nombre: 'Javier',
    edad: 40,
    direccion: 'Andalucía, España'
  };

  // Json
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Spiderman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async
  miObservable = interval(2000); // 0,1,2,3,4,5,6,
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPeronsa(): void {
    if (this.nombre === 'Mamen') {
      this.nombre = 'Javier';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Mamen';
      this.genero = 'femenino';
    }
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  agregarCliente(): void {
    // Da igual el nombre se añada, solo sirve para ver el uso del pipe
    this.clientes.push('Javier');
  }

}
