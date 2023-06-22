import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { routesDatas } from "../mock/routes";
import Header from "../components/layout/header/Header";
import Sidebar from "../components/layout/sidebar/Sidebar";

const Rout = () => {
  const [isDashboard, setIsDashboard] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setIsDashboard(true);
    }
  }, [location.pathname]);

  return (
    <Routes>
      {isDashboard && <Route path={"/dashboard"} element={<Sidebar />} />}
      <Route element={<Header />}>
        {routesDatas.map((pages) => (
          <Route path={pages.path} element={<pages.element />} key={pages.id} />
        ))}
      </Route>
    </Routes>
  );
};

export default Rout;
