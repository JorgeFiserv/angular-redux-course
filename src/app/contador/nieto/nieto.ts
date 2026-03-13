import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  standalone: false,
  templateUrl: './nieto.html',
  styleUrl: './nieto.scss',
})
export class Nieto {
  contador = input<number>(0);
  contadorChange = output<number>();
  reset() {
    this.contadorChange.emit(0);
  }
}
