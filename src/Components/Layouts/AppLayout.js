import React from 'react';
import PrivateLayout from './Private/PrivateLayout';
import PublicLayout from './Public/PublicLayout';

function AppLayout({ isAuthenticated, children }) {
  // const errorMsg = useSelector((state) => state?.error?.msg);
  // const networkStatus = useNetworkStatus();

  return isAuthenticated ? (
    <PrivateLayout>{children}</PrivateLayout>
  ) : (
    <PublicLayout>{children}</PublicLayout>
  );
}

export default AppLayout;
