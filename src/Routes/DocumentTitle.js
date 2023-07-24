import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import { AUTH_ROUTES } from './AuthRoutes';
import { PRIVATE_ROUTES } from './PrivateRoutes';
import { PUBLIC_ROUTES } from './PublicRoutes';

const { pathToRegexp } = require('path-to-regexp');

// eslint-disable-next-line react/prop-types
function DocumentTitle({ isAuthenticated = false }) {
  const location = useLocation();
  const ROUTES = PUBLIC_ROUTES.concat(
    isAuthenticated ? PRIVATE_ROUTES : AUTH_ROUTES,
  );
  const matchedRoute = ROUTES.find((route) => route.path !== '*' && pathToRegexp(route.path).test(location.pathname));
  const title = matchedRoute ? matchedRoute.title : '';
  return (
    <Helmet>
      <title>{title}</title>
      <meta />
    </Helmet>
  );
}

export default DocumentTitle;
