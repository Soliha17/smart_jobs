import { Col, Input, Modal, Row, Form } from "antd";

import "./modal.css";

import SmartJobLogo from "../../../assets/images/smart-logo.svg";
import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import { useState } from "react";
import LabeledInput from "../labeled-input/LabeledInput";

const JobSeekerModal = ({ open, setOpen }) => {
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

  const [selectedButton, setSelectedButton] = useState("btn1");

  const selectButton = (btn) => {
    setSelectedButton(btn);
  };

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
          <div className="select-btn-group__login-modal">
            <button
              className={` ${
                selectedButton === "btn1" && "selected-button____login-modal"
              }`}
              onClick={() => selectButton("btn1")}
            >
              Ish Izlash
            </button>
            <button
              className={` ${
                selectedButton === "btn2" && "selected-button____login-modal"
              }`}
              onClick={() => selectButton("btn2")}
            >
              Hodim Izlash
            </button>
          </div>
          <h3>Kirish va registratsiya</h3>
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
              <Row gutter={[24, 34]}>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Telefon yoki E-maingizni kiriting"
                    labelFor="phoneOrEmail"
                    // req={true}
                    input={<Input size="large" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <button className="primary-btn">Davom etish</button>
                </Col>
              </Row>
            </Form>
            <span className="text__login-modal">
              <img src={PrivacyIcon} alt="privacy-icon" />
              <p>Barcha ma'lumotlaringiz himoyalangan</p>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default JobSeekerModal;
