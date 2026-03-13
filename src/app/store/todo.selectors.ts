import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from '../models/todo.model';

export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(selectTodoState, (state) => state.todos);
export const selectFilter = createSelector(selectTodoState, (state) => state.filter);

export const selectCompletedCount = createSelector(
  selectTodos,
  (todos) => todos.filter((todo) => todo.completed).length,
);

export const selectPendingCount = createSelector(
  selectTodos,
  (todos) => todos.filter((todo) => !todo.completed).length,
);

export const selectFilteredTodos = createSelector(selectTodos, selectFilter, (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
});
