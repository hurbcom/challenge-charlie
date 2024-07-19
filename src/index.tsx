import ReactDOM from "react-dom/client";

import "react-toastify/dist/ReactToastify.min.css";
import "react-tooltip/dist/react-tooltip.css";
import App from "./app";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
