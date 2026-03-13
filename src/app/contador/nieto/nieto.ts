import { Component, input, output, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectContador } from '../contador.selectors';
import * as actions from '../contador.actions';
@Component({
  selector: 'app-nieto',
  standalone: false,
  templateUrl: './nieto.html',
  styleUrl: './nieto.scss',
})
export class Nieto {
  private store = inject(Store<{ contador: number }>);
  contador = this.store.selectSignal(selectContador);
  reset() {
    this.store.dispatch(actions.reset());
  }
}
