import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';

import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Empezar el curso'),
  new Todo('Aprender arquitectura Hexagonal'),
  new Todo('Practiar DDD'),
  new Todo('Practiar TDD'),
  new Todo('Obtener un nuevo empleo'),
];

export const todoReducer = createReducer(
  initialState,
  // Crear
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  // Toggle
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      }
      return todo;
    });
  }),

  // Editar
  on(actions.editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      }
      return todo;
    });
  }),

  // Borrar
  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  // ToggleAll
  on(actions.toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado: !todo.completado,
      };
    });
  }),

  // Borrat Todos Completados
  on(actions.borrarCompletados, (state) => {
    return state.filter((todo) => !todo.completado);
  })
);
