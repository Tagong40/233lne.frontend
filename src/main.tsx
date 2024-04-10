import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AutoScrollToTop from "./Components/AutoTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AutoScrollToTop />
    <App />
  </React.StrictMode>
);
