import { Checkbox, Col, Form, Input, Radio, Row, Grid } from "antd";
import React from "react";
import LabeledInput from "../../components/molecules/labeled-input/LabeledInput";
import { useTranslation } from "react-i18next";

const SettingsProfile = () => {
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
    <div className="settings-profile container">
      <p className="title">{t("settings")}</p>
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
      <div className="footer__settings-profile">
        <p className="subtitle__profile">{t("notificationSettings")}</p>
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
          <Row gutter={[24, 5]} className="footer-row__settings-profile">
            <Col xs={24} sm={8}>
              <p>{t("smsNotifications")}</p>
              <Form.Item className="radio-item__settings-profile">
                <Radio.Group>
                  <Radio value="sms" size="large">
                    {t("smsReminderForInterview")}
                  </Radio>
                  <Radio value="phone" size="large">
                    {t("smsReminderForInterview")}
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <p> {t("notifications")}</p>
              <Checkbox className="checkbox__settings-profile">
                {t("views2")}
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">
                {t("works")}
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">
                {t("pushNotificationsAreInvitations")}
              </Checkbox>
            </Col>
            <Col xs={24} sm={8}>
              <p> {t("mailingLists")}</p>
              <Checkbox className="checkbox__settings-profile">
                {t("views2")}
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">
                {" "}
                {t("works")}
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">
                {t("pushNotificationsAreInvitations")}
              </Checkbox>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SettingsProfile;
