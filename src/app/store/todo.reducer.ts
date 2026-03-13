import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { TodoState } from '../models/todo.model';

export const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

export const todoReducer = createReducer(
  initialState,

  on(actions.addTodo, (state, { text }) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ],
  })),

  on(actions.toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  })),

  on(actions.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  on(actions.updateTodo, (state, { id, text }) => ({
    ...state,
    todos: state.todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
  })),

  on(actions.toggleAll, (state) => {
    const allCompleted = state.todos.every((t) => t.completed);

    return {
      ...state,
      todos: state.todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      })),
    };
  }),

  on(actions.clearCompleted, (state) => ({
    ...state,
    todos: state.todos.filter((todo) => !todo.completed),
  })),

  on(actions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })),
);
