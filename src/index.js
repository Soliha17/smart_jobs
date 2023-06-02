import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Rout from "./router/router";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Rout />
  </I18nextProvider>
);
