import React from 'react';
import { Switch } from 'react-router-dom';

//Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Pages
import Login from '../pages/Login';
import Movies from '../components/Movies';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute
        component={Movies}
        isAuthenticated={true}
        path={'/'}
        exact={true}
      />
      <PublicRoute
        component={Login}
        isAuthenticated={true}
        path={'/signin'}
        exact={true}
      />
    </Switch>
  );
};

export default Routes;
