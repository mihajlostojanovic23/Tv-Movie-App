import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query'
import Routes from "./routes";
import { UserProvider } from "./context/userContext";

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
    <Router>
      <Routes/>
      </Router>
      </QueryClientProvider>
      </UserProvider>
  );
}

export default App;
