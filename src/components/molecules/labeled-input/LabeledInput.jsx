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
  const rules = [
    {
      // required: req,
      // message: validateMessages,
    },
  ];

  // if (labelFor === "workedDate") {
  //   rules.push({ type: "object" });
  // }

  if (labelFor === "agreementOfInfo") {
    rules.push({
      // add your new rule here
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject(new Error("Should accept agreement")),
    });
  }
  if (labelFor === "confirmParolOfInfo") {
    rules.push(({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("parolOfInfo") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match!")
        );
      },
    }));
  }

  let jobDrawerValues = JSON.parse(localStorage.getItem("jobDrawerValues"));

  return (
    <Form.Item
      label={labelName}
      name={labelFor}
      className={className}
      valuePropName={valuePropName}
      rules={rules}
    >
      {/* {labelFor === "experience" && jobDrawerValues === null ? "salom" : input} */}
      {input}
    </Form.Item>
  );
};

export default LabeledInput;
