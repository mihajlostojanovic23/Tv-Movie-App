import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IPublicRouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact: boolean
  // Add any additional props if needed
}

const PublicRoute: React.FC<IPublicRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(props) =>
        isAuthenticated ?(
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
