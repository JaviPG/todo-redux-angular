import { ActionReducerMap } from '@ngrx/store';


// Reducers
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './todos/filtro/filtro.reducer';

import { FiltroType } from './todos/filtro/filtro.actions';
import { Todo } from './todos/models/todo.model';

export interface AppState {
  todos: Todo[];
  filtro: FiltroType
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
