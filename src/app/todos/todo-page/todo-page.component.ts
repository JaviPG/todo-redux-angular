import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  completado: boolean;

  constructor(private store: Store<AppState>) {
    this.completado = false;
  }

  ngOnInit(): void {}

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({ completado: this.completado }));
  }
}
