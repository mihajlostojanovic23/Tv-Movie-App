import React from 'react';
import { Switch} from 'react-router-dom';
import Movies from '../components/Movies';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../pages/Login';


const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute component={Movies} isAuthenticated={true} path={'/'} exact={true} />
      <PublicRoute component={Login} isAuthenticated={false} path={'/signin'} exact={true} />
    </Switch>
  );
};

export default Routes;