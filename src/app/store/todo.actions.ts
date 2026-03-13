import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[TODO] Add Todo', props<{ text: string }>());
export const toggleTodo = createAction('[TODO] Toggle Todo', props<{ id: string }>());
export const deleteTodo = createAction('[TODO] Delete Todo', props<{ id: string }>());
export const updateTodo = createAction('[TODO] Update Todo', props<{ id: string; text: string }>());
export const toggleAll = createAction('[TODO] Toggle All');
export const clearCompleted = createAction('[TODO] Clear Completed');
export const setFilter = createAction(
  '[TODO] Set Filter',
  props<{ filter: 'all' | 'active' | 'completed' }>(),
);
