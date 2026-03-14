import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as action from '../../store/todo.actions';
import { selectPendingCount, selectFilter } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.html',
  styleUrl: './todo-footer.scss',
})
export class TodoFooter {
  private store = inject(Store);
  pending = this.store.selectSignal(selectPendingCount);
  filter = this.store.selectSignal(selectFilter);

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.store.dispatch(action.setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(action.clearCompleted());
  }
}
