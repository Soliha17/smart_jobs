import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Rout from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Rout />
  </React.StrictMode>
);
