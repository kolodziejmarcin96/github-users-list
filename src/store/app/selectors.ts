import { AppState } from '../reducer';

import { Repo, User, UserHistory } from './types';

export const usersListSelector = ({ app }: AppState): User[] =>
app.users;

export const fetchingStatusSelector = ({ app }: AppState): boolean =>
app.fetching;

export const userDetailsSelector = ({ app }: AppState): User =>
app.userDetails;

export const userReposSelector = ({ app }: AppState): Repo[] =>
app.userRepos;

export const userHistorySelector = ({ app }: AppState): UserHistory[] =>
app.userHistory;
