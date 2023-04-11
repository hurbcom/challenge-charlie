import { createRoot } from "react-dom/client";
import React from "react";
import App from "components/App";

// Clear the existing HTML content
const container = document.getElementById("root") as HTMLElement;

// Render your React component instead
const root = createRoot(container);
root.render(<App />);
