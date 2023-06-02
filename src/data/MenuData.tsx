// Todo: Try to remove userAuth because you already put components in private or public route

export const MenuData = [
  { id: 1, title: 'Home', userAuth: true, route: '/' },
  { id: 2, title: 'Settings', userAuth: true, route: '/settings' },
  { id: 3, title: 'My List', userAuth: true, route: '/mylist' },
  { id: 4, title: 'Login', userAuth: false, route: '/login' },
  { id: 5, title: 'Logout', userAuth: true, route: '/logout' },
];
