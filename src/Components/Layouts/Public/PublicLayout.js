import React from 'react';
import { Navbar } from 'Components/Layouts/Public/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export function PublicLayout({ children }) {
  return (
    <main id="main">
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </main>
  );
}

export default PublicLayout;
