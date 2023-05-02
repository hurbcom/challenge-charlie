import React, { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("react-app");

if (root) {
    hydrateRoot(
        root,
        <StrictMode>
            <App />
        </StrictMode>
    );
}
