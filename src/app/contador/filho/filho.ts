import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectContador } from '../contador.selectors';
import * as actions from '../contador.actions';
@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.html',
  styleUrl: './filho.scss',
})
export class Filho {
  private store = inject(Store<{ contador: number }>);
  contador = this.store.selectSignal(selectContador);

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }
  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
  multiplicar() {
    this.store.dispatch(actions.multiplicar({ multiplicador: 2 }));
  }
  dividir() {
    this.store.dispatch(actions.dividir());
  }
}
