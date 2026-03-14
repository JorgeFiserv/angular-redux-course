import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFilter, selectFilteredTodos } from '../../store/todo.selectors';
import * as actions from '../../store/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  private store = inject(Store);
  //store vindo do ngrx
  todos = this.store.selectSignal(selectFilteredTodos);

  toggleTodo(id: string) {
    this.store.dispatch(actions.toggleTodo({ id }));
  }
  deleteTodo(id: string) {
    this.store.dispatch(actions.deleteTodo({ id }));
  }
}
