import React from "react";

import "./sectionsHeader.css";

import RightArrow from "../../../assets/images/right-blue-icon.svg";

const SectionsHeader = ({ children }) => {
  return (
    <div className="sections-header container">
      <div className="left__sections-header">
        <p className="title">{children.title}</p>
        <p className="subtitle">{children.text}</p>
      </div>
      <button className="btn__sections-header">
        Barcha {children.btnText}
        <img src={RightArrow} alt="RightArrow icon" />
      </button>
    </div>
  );
};

export default SectionsHeader;
