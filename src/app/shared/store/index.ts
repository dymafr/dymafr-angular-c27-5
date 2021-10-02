import { Action, ActionReducerMap } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export interface AppState {
  todos: {
    data: Todo[];
  };
}

const TODOS_INITIAL_STATE = {
  data: [
    {
      message: 'Manger une pizza',
      done: false,
    },
  ],
};

const todosReducer = createReducer(TODOS_INITIAL_STATE);

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  todos: todosReducer,
};
