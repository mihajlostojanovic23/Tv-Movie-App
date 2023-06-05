import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

//Layouts
import Layout from '../../layouts/Layout';

//Context
import UserContext, { UserProvider } from '../../../context/userContext';
import { MoviesProvider } from '../../../context/moviesContext';

//Interface
interface IPrivateRouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  component: Component,
  ...restProps
}) => {
  const { userAuth } = useContext(UserContext);
  console.log(userAuth);
  return (
    <UserProvider>
      <MoviesProvider>
        <Route
          {...restProps}
          render={() =>
            userAuth ? (
              <Layout>
                <Component />
              </Layout>
            ) : (
              <Redirect to="/signin" />
            )
          }
        />
      </MoviesProvider>
    </UserProvider>
  );
};

export default PrivateRoute;
