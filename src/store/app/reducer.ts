import { createReducer } from 'typesafe-actions';

import {
  SetFetchingAction,
  SetStackUsersAction,
  SetUserDetailsAction,
  SetUserHistoryAction,
  SetUserReposAction,
} from './actions';
import { Repo, User, UserHistory } from './types';

export interface UserState {
  users: User[];
  fetching: boolean;
  userDetails: User;
  userRepos: Repo[];
  userHistory: UserHistory[];
}

export const initialState: UserState = {
  fetching: false,
  userDetails: {
    avatar_url: '',
    html_url: '',
    id: -1,
    login: '',
  },
  userHistory: [{
    action: '',
    avatar_url: '',
    created_at: '',
    html_url: '',
    login: '',
    name: '',
  }],
  userRepos: [{ name: '' }],
  users: [{
    avatar_url: '',
    html_url: '',
    id: -1,
    login: '',
  }],
};

export const app = createReducer(initialState)
  .handleAction(
    'STACK_USERS',
    (state: UserState, action: SetStackUsersAction): UserState => ({
      ...state,
      users: state.users[0].id !== -1 ? state.users.concat(action.payload) : action.payload,
    }),
  )
  .handleAction(
    'FETCHING',
    (state: UserState, action: SetFetchingAction): UserState => ({
      ...state,
      fetching: action.payload,
    }),
  )
  .handleAction(
    'SET_USER_DETAILS',
    (state: UserState, action: SetUserDetailsAction): UserState => ({
      ...state,
      userDetails: action.payload,
    }),
  )
  .handleAction(
    'SET_USER_REPOS',
    (state: UserState, action: SetUserReposAction): UserState => ({
      ...state,
      userRepos: action.payload,
    }),
  )
  .handleAction(
    'SET_USER_HISTORY',
    (state: UserState, action: SetUserHistoryAction): UserState => ({
      ...state,
      userHistory: action.payload,
    }),
  );
