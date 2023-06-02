import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

interface IPrivateRouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact: boolean;
  // Add any additional props if needed
}

//Todo: Solve any
//Todo: Add User context and wrap inside Route

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(props) =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
