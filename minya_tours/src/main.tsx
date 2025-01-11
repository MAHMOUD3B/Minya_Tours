import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/custom-bootstrap.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import Store from "./RTK/store.ts";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
