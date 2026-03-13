import { Todo } from '../models/todo.model';

export interface AppState {
  todos: Todo[];
  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
}
