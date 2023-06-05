import React from 'react';

//Routes
import Routes from './containers/Routes';

//Spatial Navigation
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import QueryContextProvider from './providers/QueryContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

//Init Navigation
initNavigation({
  debug: false,
  visualDebug: false,
});

function App() {
  return (
    <QueryContextProvider>
      <Router>
        <Routes />
      </Router>
    </QueryContextProvider>
  );
}

export default App;
