import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';

//Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Pages
import Login from '../pages/Login';
import Movies from '../components/Movies';
import UserContext from '../context/userContext';

const Routes: React.FC = () => {
  const { userAuth } = useContext(UserContext);
  return (
    <Switch>
      <PrivateRoute
        component={Movies}
        isAuthenticated={userAuth}
        path={'/'}
        exact={true}
      />
      <PublicRoute
        component={Login}
        isAuthenticated={userAuth}
        path={'/signin'}
        exact={true}
      />
    </Switch>
  );
};

export default Routes;
