import { createAction, props } from '@ngrx/store';

export enum FiltroType {
  TODOS = 'TODOS',
  COMPLETADOS = 'COMPLETADOS',
  PENDIENTES = 'PENDIENTES'
}

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: FiltroType }>()
);
