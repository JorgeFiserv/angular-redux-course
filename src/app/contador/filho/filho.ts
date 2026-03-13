import { Component, model, OnInit, inject } from '@angular/core';
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
  contador = model<number>(0);
  private store = inject(Store<{ contador: number }>);
  ngOnInit() {
    console.log('contador22', this.contador());
    this.store.select(selectContador).subscribe((contador) => {
      this.contador.set(contador);
    });
  }

  constructor() {}
  multiplicar() {
    this.store.dispatch(actions.multiplicar({ multiplicador: 2 }));
  }
}
