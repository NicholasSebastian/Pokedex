import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="title">
      <h2>Pokédex App</h2>
      <span>By Nicholas Sebastian</span>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
