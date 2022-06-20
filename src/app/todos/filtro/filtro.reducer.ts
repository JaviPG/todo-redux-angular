import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, FiltroType } from './filtro.actions';

export const initialState: FiltroType = FiltroType.TODOS;

export const filtroReducer = createReducer<FiltroType, Action>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);
