import { RouteProps } from 'react-router-dom';

import { ErrorPage } from '../pages/ErrorPage';
import { Home } from '../pages/Home';
import { UserDetails } from '../pages/UserDetails';

export const mainRoutes: RouteProps[] = [
  {
    component: Home,
    path: '/',
  },
  {
    component: UserDetails,
    path: '/user-details/:username',
  },
  {
    component: ErrorPage,
  },
];

const nestedRoutes: RouteProps[] = [];

export const routes: RouteProps[] = [...mainRoutes, ...nestedRoutes];
