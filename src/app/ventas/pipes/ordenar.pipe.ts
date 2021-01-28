import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[]): Heroe[] {
    return value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
  }

}
