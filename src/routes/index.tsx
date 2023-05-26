import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Movies from '../components/Movies';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        
          <Movies />
      </Route>
      
    </Switch>
  );
};

export default Routes;