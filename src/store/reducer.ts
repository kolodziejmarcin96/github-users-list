import { combineReducers } from 'redux';

import { UserState, app } from './app/reducer';

export interface AppState {
  app: UserState;
}

export const rootReducer = combineReducers<AppState>({
  app,
});
