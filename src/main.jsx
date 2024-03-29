import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <footer style={{ textAlign: "center" }}>
      © 2024 By{" "}
      <a id="github" href="https://github.com/d95tan/">
        Dan
      </a>
    </footer>
  </React.StrictMode>
);
