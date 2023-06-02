import { useState, useEffect } from "react";
import { Col, Row, Form } from "antd";

import "./modal.css";

import BackIcon from "../../../assets/images/back-icon-modal.svg";
import OTPInput from "../../atoms/OTPInput";

const SignUp = ({ next, prev, data }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    next(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(data);

  function handleBack() {
    prev(1);
  }

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body__login-modal">
      <img src={BackIcon} alt="BackIcon" onClick={handleBack} />
      <h3 className="header__modal">Tekshirish kodi</h3>
      <p className="info__modal">Tasdiqlash kodi {data} raqamiga yuborildi</p>
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
            </Col>
          </Row>
        </Form>
        <span className="text__login-modal">
          <p style={{ width: "85%", textAlign: "center" }}>
            Kod kelmasa {seconds} soniyadan keyin yangisini olishingiz mumkin
          </p>
        </span>
      </div>
    </div>
  );
};
export default SignUp;
