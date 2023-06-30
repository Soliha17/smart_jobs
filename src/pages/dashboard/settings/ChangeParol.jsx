import React from "react";
import { Col, Form, Input, Row, Grid } from "antd";

import { useTranslation } from "react-i18next";
import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

const ChangeParol = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const offset = screens.xs || screens.sm ? 0 : 16;

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  return (
    <div className="settings-profile change-parol container">
      <div className="top__settings-profile">
        <p className="subtitle__profile">{t("changePassword")}</p>
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
          <Row gutter={[24, 5]}>
            <Col xs={24} sm={12} md={8}>
              <LabeledInput
                labelName={t("oldPassword")}
                labelFor="oldParolOfProfile"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <LabeledInput
                labelName={t("newPassword")}
                labelFor="newParolOfProfile"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <LabeledInput
                labelName={t("enterAgain")}
                labelFor="confirmParolOfProfile"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col
              xs={24}
              sm={12}
              md={8}
              offset={offset}
              style={{ marginLeft: "auto" }}
            >
              <button
                type="submit"
                className="primary-btn"
                style={{ marginTop: "27px" }}
              >
                {t("save")}
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ChangeParol;
