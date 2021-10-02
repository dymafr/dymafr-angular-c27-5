import { createReducer } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export interface TodosState {
  data: Todo[];
}

export const TODOS_INITIAL_STATE = {
  data: [
    {
      message: 'Manger une pizza',
      done: false,
    },
  ],
};

export const todosReducer = createReducer(TODOS_INITIAL_STATE);
