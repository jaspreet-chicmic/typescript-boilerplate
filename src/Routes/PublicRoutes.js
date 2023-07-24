/* eslint-disable no-unused-vars */
import React from 'react';
import AboutUs from 'Views/AboutUs';
import Login from 'Views/Login';
import Register from 'Views/SignUp';
import Dashboard from 'Views/Dashboard';
import { Navigate } from 'react-router-dom';
import ExampleRtk from 'Views/ExampleRtk';
import Squads from 'Views/Squads';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from 'Shared/Constants';

export const PUBLIC_ROUTES = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <Dashboard />,
    title: ROUTES_CONFIG.HOMEPAGE.title,
    exact: true,
  },
  {
    path: ROUTES_CONFIG.SQUADS.path,
    element: <Squads />,
    title: ROUTES_CONFIG.SQUADS.title,
  },
  {
    path: ROUTES_CONFIG.ABOUT.path,
    element: <AboutUs />,
    title: ROUTES_CONFIG.ABOUT.title,
  },
  {
    path: ROUTES_CONFIG.LOGIN.path,
    element: <Login />,
    title: ROUTES_CONFIG.LOGIN.title,
  },
  {
    path: ROUTES_CONFIG.REGISTER.path,
    element: <Register />,
    title: ROUTES_CONFIG.REGISTER.title,
  },
  {
    path: '/rtk',
    element: <ExampleRtk />,
    title: 'RTKs',
  },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
