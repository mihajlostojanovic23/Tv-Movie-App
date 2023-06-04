import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../../components/layouts/Layout';
import UserContext, { UserProvider } from '../../context/userContext';

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
console.log(userAuth)
  return (
    <UserProvider>
    <Route
      {...restProps}
      render={() =>
        userAuth ? (
          <Layout>
            <Component  />
          </Layout>
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
    </UserProvider>
  );
};

export default PrivateRoute;
