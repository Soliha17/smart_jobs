import { Checkbox, Col, Form, Input, Radio, Row, Grid } from "antd";
import React from "react";
import LabeledInput from "../../components/molecules/labeled-input/LabeledInput";

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

  return (
    <div className="settings-profile container">
      <p className="title">Sozlamalar</p>
      <div className="top__settings-profile">
        <p className="subtitle__profile">Parolni o'zgartirish</p>
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
                labelName="Eski parol"
                labelFor="oldParolOfProfile"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <LabeledInput
                labelName="Yangi parol"
                labelFor="newParolOfProfile"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <LabeledInput
                labelName="Qayta kiriting"
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
                Saqlash
              </button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="footer__settings-profile">
        <p className="subtitle__profile">Bildirishnoma sozlamalari</p>
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
              <p>SMS xabarnomalar</p>
              <Form.Item className="radio-item__settings-profile">
                <Radio.Group>
                  <Radio value="sms" size="large">
                    {" "}
                    Intervyu uchun SMS eslatma{" "}
                  </Radio>
                  <Radio value="phone" size="large">
                    {" "}
                    Intervyu uchun SMS eslatma{" "}
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} sm={8}>
              <p>Bildirishnomalar</p>
              <Checkbox className="checkbox__settings-profile">
                Qarashlar
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">Ishlar</Checkbox>
              <Checkbox className="checkbox__settings-profile">
                Push-bildirishnomalar taklifnomalar
              </Checkbox>
            </Col>
            <Col xs={24} sm={8}>
              <p>Pochta ro'yxatlari</p>
              <Checkbox className="checkbox__settings-profile">
                Qarashlar
              </Checkbox>
              <Checkbox className="checkbox__settings-profile">Ishlar</Checkbox>
              <Checkbox className="checkbox__settings-profile">
                Push-bildirishnomalar taklifnomalar
              </Checkbox>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SettingsProfile;
