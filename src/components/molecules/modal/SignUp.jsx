import { useState, useEffect } from "react";
import { Col, Row, Form } from "antd";
import "./modal.css";
import BackIcon from "../../../assets/images/arrow-back-modal.svg";
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

  const initialSeconds = 10;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          setIsTimerFinished(true);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerFinished]);

  function handleTimerReset() {
    setSeconds(initialSeconds);
    setIsTimerFinished(false);
  }

  return (
    <div className="body__login-modal">
      <span className="back-icon__modal">
        <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      </span>
      <h3 className="header__modal">Tekshirish kodi</h3>
      <p className="info__modal">Tasdiqlash kodi {data} raqamiga yuborildi</p>
      <div className="content__login-modal">
        <Form
          form={form}
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24}>
              <OTPInput />
            </Col>
          </Row>
        </Form>
        {isTimerFinished ? (
          <span className="text__login-modal" onClick={handleTimerReset}>
            <p
              style={{ width: "85%", textAlign: "center", fontWeight: "bold" }}
            >
              Qayta yuborish
            </p>
          </span>
        ) : (
          <span className="text__login-modal">
            <p style={{ width: "85%", textAlign: "center" }}>
              Kod kelmasa {seconds} soniyadan keyin yangisini olishingiz mumkin
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default SignUp;
