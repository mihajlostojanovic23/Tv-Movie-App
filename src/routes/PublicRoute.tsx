import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/layouts/Layout';

//Interface
interface IPublicRouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<any>;
  path: string;
  exact: boolean;
  // Add any additional props if needed
}

//Todo: Reaname routes to Routing
//Todo: Rename PublicRoute.tsx to index tsx and create separate folders
//Todo: Move to components folder public and private routes
//Todo: Solve any
//Todo: Delete check logic for isauthenticated because this is public route and authentification is not necessery

const PublicRoute: React.FC<IPublicRouteProps> = ({
  isAuthenticated,
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

export default PublicRoute;
