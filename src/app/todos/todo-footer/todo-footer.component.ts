import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filtroActions from '../filtro/filtro.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtroActions.FiltroType;
  filters: filtroActions.FiltroType[];

  countPendientes: number = 0;
  countCompletados: number = 0;

  constructor(private store: Store<AppState>) {
    this.filters = Object.keys(
      filtroActions.FiltroType
    ) as filtroActions.FiltroType[];
  }

  ngOnInit(): void {
    // this.store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.countPendientes = state.todos.filter(
        (todo) => !todo.completado
      ).length;
      this.countCompletados = state.todos.filter(
        (todo) => todo.completado
      ).length;
    });
  }

  cambiarFiltro(filtro: filtroActions.FiltroType) {
    if (filtro === this.filtroActual) return;

    this.store.dispatch(filtroActions.setFiltro({ filtro: filtro }));
  }

  borrarCompletados() {
    console.log('Completados:', this.countCompletados);
    if (this.countCompletados === 0) return;
    this.store.dispatch(todoActions.borrarCompletados());
  }
}
