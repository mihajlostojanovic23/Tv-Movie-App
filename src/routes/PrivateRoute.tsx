import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IPrivateRouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact: boolean
  // Add any additional props if needed
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
