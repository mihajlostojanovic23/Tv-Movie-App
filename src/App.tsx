import { BrowserRouter as Router } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Routes from "./routes";

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
     <QueryClientProvider client={queryClient}>
    <Router>
      <Routes/>
      </Router>
      </QueryClientProvider>
  );
}

export default App;
