import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], orderBy: string = 'sin orden'): Heroe[] {

    switch (orderBy) {
      case 'nombre':
        return value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'vuela':
        return value.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'color':
        return value.sort((a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return value;
    }
  }

}
