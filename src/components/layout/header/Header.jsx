import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      Header
      <Outlet />
    </>
  );
};

export default Header;
