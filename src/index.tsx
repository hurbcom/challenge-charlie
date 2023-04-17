import { createRoot } from "react-dom/client";
import React from "react";
import App from "components/App";
import GlobalStylesComposed from "components/GlobalStyle";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <GlobalStylesComposed />
        <App />
    </React.StrictMode>
);
