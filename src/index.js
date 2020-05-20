import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <div className="title">
      <h2>Pokédex App</h2>
      <span>By Nicholas Sebastian</span>
    </div>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
