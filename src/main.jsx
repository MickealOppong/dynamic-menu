import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import AppContext from "./components/globalContext/AppContext";
ReactDom.createRoot(document.getElementById("root"))
  .render(<AppContext>
    <App />
  </AppContext>,)