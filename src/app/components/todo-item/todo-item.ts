import { Component, input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from '../../store/todo.actions';
import { Todo } from '../../models/todo.model';
@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  private store = inject(Store);
  todo = input.required<Todo>();

  toggle() {
    this.store.dispatch(todoActions.toggleTodo({ id: this.todo().id }));
  }
  remove() {
    this.store.dispatch(todoActions.deleteTodo({ id: this.todo().id }));
  }
}
