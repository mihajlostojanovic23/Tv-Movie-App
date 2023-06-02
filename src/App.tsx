import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes';
import { UserProvider } from './context/userContext';

import { initNavigation } from '@noriginmedia/react-spatial-navigation';

initNavigation({
  debug: false,
  visualDebug: false,
});

// Create a client
const queryClient = new QueryClient();

// Todo: Create Providers folder inside component folder and create QuueryContextProvider fodler and index.tsx and make logic for query client and provider indside
// Todo: UserProvider wrap in private route
// Todo: Coment inports

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
