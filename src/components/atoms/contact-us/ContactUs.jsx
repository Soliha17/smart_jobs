import React from "react";

import "./contactUs.css";

import ContactImg from "../../../assets/images/contact-us-img.png";
import { Col, Form, Input, Row, Select } from "antd";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }} defaultValue={"998"}>
        <Option value="998">+998</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="contact-us container">
      <img src={ContactImg} alt="ContactImg" />
      <div className="content__contact-us">
        <h3> {t("contactUs")} </h3>
        <p>{t("contact-text__about")}</p>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={
            {
              // require: true,
              // requiredMark: true,
              // requiredMarkValue: requiredMark,
            }
          }
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[0, 14]}>
            <Col xs={24}>
              <Form.Item name="fullNameContactUs" label={t("fullName")}>
                <Input maxLength={50} size="large" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="phoneContactUs"
                label={t("phoneNumber")}
                rules={[
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
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  size="large"
                  className="phone-input"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <button className="primary-btn"> {t("sending")} </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
