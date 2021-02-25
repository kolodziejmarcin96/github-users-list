import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { AppState } from '../../store';
import { Repo, UserHistory } from '../../store/app/types';

import { UserDetailsLayout, UserDetailsLayoutProps } from './UserDetailsLayout';

export const UserDetails = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: AppState) => state.app.fetching);
  const { username } = useParams();

  const fetchUserDetails = () => {
    dispatch({ type: 'FETCHING', payload: true });
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(userDetailsResponse => {
        dispatch({
          payload: {
            avatar_url: userDetailsResponse.data.avatar_url,
            html_url: userDetailsResponse.data.html_url,
            id: userDetailsResponse.data.id,
            login: userDetailsResponse.data.login,
          },
          type: 'SET_USER_DETAILS',
        });
        axios
          .get(`https://api.github.com/users/${username}/repos`)
          .then(userReposResponse => {
            const filteredUserReposArray: Repo[] = userReposResponse.data;
            filteredUserReposArray.forEach((repo: any) => ({
              name: repo.name,
            }));
            dispatch({
              payload: filteredUserReposArray,
              type: 'SET_USER_REPOS',
            });
            axios
              .get(`https://api.github.com/users/${username}/events/public`)
              .then(userHistoryResponse => {
                const historyArray: UserHistory[] = [];
                userHistoryResponse.data.forEach((singleHistory: any) => {
                  if (singleHistory.type !== 'PullRequestEvent') {
                    return;
                  }
                  historyArray.push({
                    action: singleHistory.payload.pull_request.state,
                    avatar_url:
                      singleHistory.payload.pull_request.user.avatar_url,
                    created_at: singleHistory.payload.pull_request.created_at,
                    html_url: singleHistory.payload.pull_request.html_url,
                    login: singleHistory.payload.pull_request.user.login,
                    name: singleHistory.repo.name,
                  });
                });
                dispatch({ type: 'SET_USER_HISTORY', payload: historyArray });
                dispatch({ type: 'FETCHING', payload: false });
              })
              .catch(() => {
                dispatch({ type: 'FETCHING', payload: false });
              });
          })
          .catch(() => {
            dispatch({ type: 'FETCHING', payload: false });
          });
      })
      .catch(() => {
        dispatch({ type: 'FETCHING', payload: false });
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const props: UserDetailsLayoutProps = {
    isFetching,
  };

  return <UserDetailsLayout {...props} />;
};
