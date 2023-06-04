import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
//Interface
interface IPublicRouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

//Todo: Reaname routes to Routing
//Todo: Rename PublicRoute.tsx to index tsx and create separate folders
//Todo: Move to components folder public and private routes

const PublicRoute: React.FC<IPublicRouteProps> = ({
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={() =>
          <Layout>
            <Component/>
          </Layout>
      }
    />
  );
};

export default PublicRoute;
