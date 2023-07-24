import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from 'Shared/Constants';
import Squads from 'Views/Squads';

export const PRIVATE_ROUTES = [
  {
    path: ROUTES_CONFIG.SQUADS.path,
    element: <Squads />,
    title: ROUTES_CONFIG.SQUADS.title,
    exact: true,
  },
  {
    path: '/wishlist',
    element: () => 'Your wishlist here',
    title: 'Dashboard',
  },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PRIVATE} />,
    title: 'Rendering wildcard',
  },
];
