import { createAction, props } from '@ngrx/store';
export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const multiplicar = createAction(
  '[Contador] Multiplicar',
  props<{ multiplicador: number }>(),
);
export const dividir = createAction('[Contador] Dividir');
