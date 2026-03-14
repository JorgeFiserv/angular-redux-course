import { Component, inject, signal } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { selectPendingCount } from '../../store/todo.selectors';
import * as actions from '../../store/todo.actions';
@Component({
  selector: 'app-todo-input',
  standalone: false,
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss',
})
export class TodoInput {
  private store = inject(Store);
  text = signal('');
  pendingCount = this.store.selectSignal(selectPendingCount);

  addTodo() {
    const value = this.text().trim();
    if (!value) return;
    this.store.dispatch(actions.addTodo({ text: value }));
    this.text.set('');
  }
}
