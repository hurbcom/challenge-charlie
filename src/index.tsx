import React from "react";
import ReactDOM from "react-dom/client";

import Weather from "./components/pages/Weather";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>
);
