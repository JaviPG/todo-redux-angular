import { Pipe, PipeTransform } from '@angular/core';
import { FiltroType } from './filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo',
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: FiltroType): Todo[] {
    switch (filtro) {
      case FiltroType.COMPLETADOS:
        return todos.filter((todo) => todo.completado);
      case FiltroType.PENDIENTES:
        return todos.filter((todo) => !todo.completado);
      case FiltroType.TODOS:
        return todos;
      default:
        return [];
    }
  }
}
