import React from "react";

import SidebarMyApplications from "../../components/atoms/my-applications-sidebar/SidebarMyApplications";

import "./myApplications.css";
import MainMyApplications from "../../components/atoms/my-applications-main/MainMyApplications";

const MyApplications = () => {
  return (
    <div className="my-applications-wrapper">
      <div className="my-applications container">
        <SidebarMyApplications />
        <MainMyApplications />
      </div>
    </div>
  );
};

export default MyApplications;
