import React from 'react';
import { Route } from 'react-router-dom';

//Layout
import Layout from '../../layouts/Layout';

//Interface
interface IPublicRouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

const PublicRoute: React.FC<IPublicRouteProps> = ({
  component: Component,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
