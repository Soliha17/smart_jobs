import React from "react";
import { Form } from "antd";

import "./labeledInput.css";

const LabeledInput = ({
  labelName,
  labelFor,
  input,
  req,
  className,
  valuePropName,
}) => {
  return (
    <Form.Item
      label={labelName}
      name={labelFor}
      className={className}
      valuePropName={valuePropName}
      rules={[
        {
          // required: req,
          // message: validateMessages,
        },
      ]}
    >
      {input}
    </Form.Item>
  );
};

export default LabeledInput;
