import React, { useContext } from 'react';
import { Switch } from 'react-router-dom';

//Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//Pages
import Movies from '../containers/Movies';
import UserContext from '../context/userContext';
import Login from '../containers/Login';
import Settings from '../containers/Settings';
import MyList from '../containers/MyList';

//Todo: Create Routes file in Containers folder and name it Routes.tsx

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

      <PrivateRoute
        component={Settings}
        isAuthenticated={userAuth}
        path={'/settings'}
        exact={true}
      />
      <PrivateRoute
        component={MyList}
        isAuthenticated={userAuth}
        path={'/mylist'}
        exact={true}
      />
    </Switch>
  );
};

export default Routes;
