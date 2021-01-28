import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower = 'lower';
  nombreUpper = 'UPPER';
  nombreCompleto = 'tItlE cAsE';

  constructor() { }

}
