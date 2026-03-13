import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectContadorState = createFeatureSelector<number>('contador');

export const selectContador = createSelector(selectContadorState, (contador) => contador);
