import React, { useState } from "react";

import "./labeledInput.css";
import { Form } from "antd";

const LabeledInput = ({ labelName, labelFor, input }) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: `${labelName} is required!`,
    types: {
      email: `${labelName} is not a valid email!`,
      number: `${labelName} is not a valid number!`,
    },
    number: {
      range: `${labelName} must be between ${0} and ${10}`,
    },
  };

  return (
    <Form.Item
      label={labelName}
      name={labelFor}
      rules={[
        {
          required: true,
          // message: "Please input your username!",
        },
      ]}
    >
      {input}
    </Form.Item>
  );
};

export default LabeledInput;
