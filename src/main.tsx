import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* basename has NO trailing slash */}
    <BrowserRouter basename="/Bavly-Portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
