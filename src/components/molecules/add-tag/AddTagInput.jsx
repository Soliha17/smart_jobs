import { Input } from "antd";
import React, { forwardRef } from "react";

const AddTagInput = forwardRef(
  ({ type, value, onChange, onBlur, onPressEnter }, ref) => {
    return (
      <Input
        className="add--tag-input"
        size="large"
        ref={ref}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onPressEnter={onPressEnter}
      />
    );
  }
);

export default AddTagInput;
