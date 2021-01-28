import { Component, OnInit } from '@angular/core';

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
  clientes = ['Maria', 'Pedro', 'Javier'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  };

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
