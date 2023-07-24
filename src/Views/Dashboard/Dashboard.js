import React, { Fragment } from 'react';
import NewMembers from './components/NewMembers';
import PopularSquads from './components/PopularSquads';
import HeroComponent from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DownloadApp from './components/DownloadApp';
import AIChatComponent from './components/AIChat/AIChatComponent';

import './styles/dashboard.scss';
import Spin from './components/Spin/Spin';
import AddOn from './components/AddOn';

function Dashbord() {
  return (
    <>
      <HeroComponent />
      <PopularSquads />
      <HowItWorks />
      <NewMembers />
      <AIChatComponent />
      <Spin />
      <AddOn />
      <DownloadApp />
    </>
  );
}

export default Dashbord;
