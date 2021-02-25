import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'src/store/app/types';

import { AppState } from '../../store';

import { HomeLayout, HomeLayoutProps } from './HomeLayout';

export const Home = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state: AppState) => state.app.users);
  const isFetching = useSelector((state: AppState) => state.app.fetching);

  window.onscroll = () => {
    if (
      !isFetching &&
      window.location.href.slice(0, -1) === window.location.origin &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      fetchUsers();
    }
  };

  const fetchUsers = () => {
    dispatch({ type: 'FETCHING', payload: true });
    axios
      .get('https://api.github.com/users', {
        params: {
          since: usersList[usersList.length - 1].id,
        },
      })
      .then(usersListResponse => {
        const filteredUsersArray: User[] = usersListResponse.data;
        filteredUsersArray.forEach((user: User) => ({
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          id: user.id,
          login: user.login,
        }));
        dispatch({
          payload: filteredUsersArray,
          type: 'STACK_USERS',
        });
        dispatch({ type: 'FETCHING', payload: false });
      })
      .catch(() => {
        dispatch({ type: 'FETCHING', payload: false });
      });
  };

  useEffect(() => {
    if (usersList[0].id === -1) {
      fetchUsers();
    }
  }, []);

  const props: HomeLayoutProps = {
    isFetching,
    usersList,
  };

  return <HomeLayout {...props} />;
};
