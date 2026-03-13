import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { selectContador } from './contador/contador.selectors';
import { AppState } from './app.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'],
})
export class App {
  private store = inject(Store<AppState>);
  contador = this.store.selectSignal(selectContador);

  constructor() {
    this.store.select(selectContador).subscribe((contador) => {
      console.log('contador', contador);
    });
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }
  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
