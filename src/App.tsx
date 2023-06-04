import React from 'react';

//Routes
import Routes from './containers/Routes/Routes';

//Spatial Navigation
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import QueryContextProvider from './providers/QueryContextProvider';

//Init Navigation
initNavigation({
  debug: false,
  visualDebug: false,
});



function App() {
  return (
    <QueryContextProvider>
      <Routes />
    </QueryContextProvider>
  );
}

export default App;
