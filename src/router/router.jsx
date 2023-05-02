import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routesDatas } from "../mock/routes";
import Header from "../components/layout/header/Header";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          {routesDatas.map((pages) => (
            <Route
              path={pages.path}
              element={<pages.element />}
              key={pages.id}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
