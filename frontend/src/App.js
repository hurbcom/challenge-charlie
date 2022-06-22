import { AuthProvider } from "./context/auth";
import RoutesApp from "./routes";
import GlobalStyle from './theme/globalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
