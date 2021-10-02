import { Action, ActionReducerMap } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';
import { todosReducer } from './todo.reducer';

export interface AppState {
  todos: {
    data: Todo[];
  };
}

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  todos: todosReducer,
};
