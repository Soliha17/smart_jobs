import React from "react";

import "./sectionsHeader.css";

import { RightOutlined } from "@ant-design/icons";

const SectionsHeader = ({ children }) => {
  return (
    <div className="sections-header container">
      <div className="left__sections-header">
        <p className="title">{children.title}</p>
        <p className="subtitle">{children.text}</p>
      </div>
      <button className="btn__sections-header">
        Barcha {children.btnText}
        <RightOutlined />
      </button>
    </div>
  );
};

export default SectionsHeader;
