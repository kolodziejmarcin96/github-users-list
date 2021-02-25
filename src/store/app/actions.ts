import { Repo, User, UserHistory } from './types';

interface StackUsersAction { type: 'STACK_USERS'; payload: User[]; }
export type SetStackUsersAction = StackUsersAction;

interface FetchingAction { type: 'FETCHING'; payload: boolean; }
export type SetFetchingAction = FetchingAction;

interface UserDetailsAction { type: 'SET_USER_DETAILS'; payload: User; }
export type SetUserDetailsAction = UserDetailsAction;

interface UserReposAction { type: 'SET_USER_REPOS'; payload: Repo[]; }
export type SetUserReposAction = UserReposAction;

interface UserHistoryAction { type: 'SET_USER_HISTORY'; payload: UserHistory[]; }
export type SetUserHistoryAction = UserHistoryAction;
