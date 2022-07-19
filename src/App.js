import { ThemeProvider } from "styled-components";
import { ForecastProvider } from "./context/ForecastContext";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ForecastProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </ForecastProvider>
  );
}

export default App;
