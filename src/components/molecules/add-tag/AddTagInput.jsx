import { Input } from "antd";
import React from "react";

const AddTagInput = ({
  ref,
  type,
  value,
  onChange,
  onBlur,
  onPressEnter,
}) => {
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
};

export default AddTagInput;
