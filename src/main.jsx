import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WeatherProvider } from "./providers/WeatherContext";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
