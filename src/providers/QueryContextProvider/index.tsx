import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

//Interface
interface IQueryProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const QueryContextProvider: React.FC<IQueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryContextProvider;
