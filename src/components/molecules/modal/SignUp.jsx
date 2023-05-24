import { Col, Input, Modal, Row, Form } from "antd";

import SmartJobLogo from "../../../assets/images/smart-logo.svg";
import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import { useState } from "react";
import LabeledInput from "../labeled-input/LabeledInput";
import BackIcon from "../../../assets/images/back-icon-modal.svg";
import OTPInput from "./OTPInput";

import "./modal.css";

const SignUp = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  // const showModal = () => {
  //   setOpen(true);
  // };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="login-modal-container">
      <Modal
        title={<img src={SmartJobLogo} alt="" />}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        className="login-modal"
        footer={false}
      >
        <div className="body__login-modal">
          <img src={BackIcon} alt="BackIcon" />
          <h3>Tekshirish kodi</h3>
          <p className="info__modal">
            Tasdiqlash kodi +998 99 501 67 16 raqamiga yuborildi
          </p>
          <div className="content__login-modal">
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
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={24}>
                  <OTPInput />
                  {/* <div className="code-group__modal">
                    <input className="code-input__modal" />
                    <input className="code-input__modal" />
                    <input className="code-input__modal" />
                    <input className="code-input__modal" />
                  </div> */}
                </Col>
              </Row>
            </Form>
            <span className="text__login-modal">
              <p style={{ width: "85%", textAlign: "center" }}>
                Kod kelmasa 60 soniyadan keyin yangisini olishingiz mumkin
              </p>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SignUp;
