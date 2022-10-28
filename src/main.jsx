import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "@style/GlobalStyle";
import { CustomerProvider } from "@providers/CustomerContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </>
);
