import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import AppLayout from 'Components/Layouts/AppLayout';
import DocumentTitle from './DocumentTitle';
import { authenticatedRoutes, guestRoutes } from './config';

function RootRouter() {
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);
  const token = useSelector((state) => state?.common?.token);
  console.log('token-->>>', token);
  const isAuthenticated = !!token;
  return (
    <>
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>
        {token ? authenticated : guest}
      </AppLayout>
    </>
  );
}

export default RootRouter;
