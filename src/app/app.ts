import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './app.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'],
})
export class App {
  private store = inject(Store<AppState>);
}
