import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
interface IQueryProps {
    children: React.ReactNode;
  }
const queryClient = new QueryClient();

const QueryContextProvider: React.FC<IQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        {children}
      </Router>
    </QueryClientProvider>
  );
};

export default QueryContextProvider;
