import { createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

export const initialState = 10;

export const _contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, (state) => state + 1),
  on(actions.decrementar, (state) => state - 1),
  on(actions.multiplicar, (state, { multiplicador }) => state * multiplicador),
);

export function contadorReducer(state: number | undefined, action: any) {
  return _contadorReducer(state, action);
}
