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
      required: req,
      // max: 32,

      // message: validateMessages,
    },
  ];

  if (labelFor === "email" || labelFor === "emailOfInfo") {
    rules.push({ type: "email" });
  }

  if (labelFor === "number") {
    rules.push(
      {
        pattern: /^(?:\d*)$/,
        message: "Value should contain just number",
      },
      {
        pattern: /^[\d]{0,9}$/,
        message: "Value should be less than 9 character",
      },
      {
        len: 9,
        message: "Value should be exactly 9 characters",
      }
    );
  }

  if (labelFor === "agreementOfInfo") {
    rules.push({
      // add your new rule here
      validator: (_, value) =>
        value
          ? Promise.resolve()
          : Promise.reject(new Error("Should accept agreement")),
    });
  }

  if (labelFor === "confirmPassword") {
    rules.push(({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match!")
        );
      },
    }));
  }

  if (labelFor === "confirmParolOfProfile") {
    rules.push(({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue("newParolOfProfile") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          new Error("The two passwords that you entered do not match!")
        );
      },
    }));
  }

  // let jobDrawerValues = JSON.parse(localStorage.getItem("jobDrawerValues"));

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
