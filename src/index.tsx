import React from "react";
import ReactDOM from "react-dom/client";
import Fetcher from "./components/Fetcher/Fetcher";
import Background from "./components/Background/Background";
import "./globalStyles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Fetcher />
    <Background />
  </React.StrictMode>
);
