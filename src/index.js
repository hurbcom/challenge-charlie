import "controllers/axiosController";
import "modules/axiosCors";
import "typeface-roboto";
import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "controllers/queryClient";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
