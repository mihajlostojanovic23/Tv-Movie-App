import React from 'react';
import { Switch } from 'react-router-dom';

//Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Pages
import Movies from '../Movies';
import Login from '../Login';
import Settings from '../Settings';
import MyList from '../MyList';


const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute
        component={Movies}
        path={'/'}
        exact={true}
      />
      <PublicRoute
        component={Login}
        path={'/signin'}
        exact={true}
      />

      <PrivateRoute
        component={Settings}
        path={'/settings'}
        exact={true}
      />
      <PrivateRoute
        component={MyList}
        path={'/mylist'}
        exact={true}
      />
    </Switch>
  );
};

export default Routes;
