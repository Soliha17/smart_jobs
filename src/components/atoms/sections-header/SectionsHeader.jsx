import React from "react";

import "./sectionsHeader.css";
import { Button } from "antd";

import { RightOutlined } from "@ant-design/icons";

const SectionsHeader = ({ children }) => {
  return (
    <div className="sections-header container">
      <div className="left__sections-header">
        <p className="title">{children.title}</p>
        <p className="subtitle">{children.text}</p>
      </div>
      <Button className="btn__sections-header" type="primary" ghost>
        Barcha {children.btnText}
        <RightOutlined /> 
      </Button>
    </div>
  );
};

export default SectionsHeader;
