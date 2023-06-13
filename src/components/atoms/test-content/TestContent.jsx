import React from "react";

import TestImg from "../../../assets/images/test-img.png";
import { Col, Form, Radio, Row } from "antd";

import "./testContent.css";
import { useTranslation } from "react-i18next";

const TestContent = ({ props }) => {
  const [form] = Form.useForm();

  const next = props.next;
  const prev = props.prev;

  const onFinish = (values) => {
    console.log("Success:", values);
    next(1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  return (
    <div className="card__take-test">
      <img src={TestImg} className="card-img__take-test" alt="TestImg" />
      <Form
        form={form}
        layout="vertical"
        // validateMessages={validateMessages}
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
        <Row gutter={[20, 8]}>
          <Col xs={24} sm={24}>
            <h2>{t("questionOfTest")}</h2>
          </Col>
          <Col xs={24} sm={24}>
            <Form.Item
              label=""
              name="testContent"
              className="radio-item__settings-profile"
            >
              <Radio.Group className="radio-group__report-modal">
                <Radio value="a" size="large">
                  {t("answerATest")}
                </Radio>
                <Radio value="b" size="large">
                  {t("answerBTest")}
                </Radio>
                <Radio value="c" size="large">
                  {t("answerCTest")}
                </Radio>
                <Radio value="d" size="large">
                  {t("answerDTest")}
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24}>
            <div className="footer__take-test">
              <button className="default-btn" onClick={() => prev(2)}>
                {t("back")}
              </button>
              <button className="primary-btn">{t("continue")}</button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TestContent;
