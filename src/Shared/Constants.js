const STRINGS = {
  SOMETHING_WENT_WRONG: 'Sorry, something went wrong.',
  OFFLINE_MESSAGE:
    'You appear to be offline. Please check your internet connection.',
};

const ROUTES = {
  HOMEPAGE: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about-us',
  SQUADS: '/squads',
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.SQUADS,
};

const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: 'Squad home',
  },
  LOGIN: {
    path: ROUTES.LOGIN,
    title: 'Login',
  },
  REGISTER: {
    path: ROUTES.REGISTER,
    title: 'Register',
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    title: 'About us',
  },
  SQUADS: {
    path: ROUTES.SQUADS,
    title: 'Squads',
  },
};

export {
  STRINGS,
  WILDCARD_ROUTES,
  ROUTES_CONFIG,
  ROUTES,
};
