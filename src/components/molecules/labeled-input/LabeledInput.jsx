import React from "react";

import "./labeledInput.css";

const LabeledInput = ({ labelName, labelFor, input }) => {
  return (
    <div className="labeled-input">
      <label htmlFor={labelFor}>{labelName}</label>
      {input}
    </div>
  );
};

export default LabeledInput;
