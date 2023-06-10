import React from "react";

import "./testHeader.css";

import NewSmartjobLogo from "../../../assets/images/new-smartjob-logo.png";

const TestHeader = () => {
  return (
    <div className="header__test">
      <img src={NewSmartjobLogo} alt="NewSmartjobLogo" />
    </div>
  );
};

export default TestHeader;
