import { useState } from "react";
import { Col, Row, Form } from "antd";

import "./modal.css";

import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import LabeledInput from "../labeled-input/LabeledInput";

const JobSeekerModal = ({ next, prev }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    next(1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [selectedButton, setSelectedButton] = useState("btn1");

  const selectButton = (btn) => {
    setSelectedButton(btn);
  };

  const [inputValue, setInputValue] = useState("");
  // const [inputError, setInputError] = useState(false);

  const handleInputChange = (event) => {
    let value = event.target.value;

    // Check if the entered value is a number between 0 and 9
    const isNumeric = /^[0-9]$/.test(value);

    if (isNumeric) {
      setInputValue("+998" + value);
      console.log(value.length);
    } else if (isNumeric === false) {
      setInputValue(value);
    } else {
      console.log("something different");
    }
  };

  return (
    <div className="job-seeker-modal">
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
      <h3 className="header__modal">Kirish va registratsiya</h3>
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
              {/* <Form.Item label="sadmsadasldma" name={"inputJobSeeker"}> */}
              <input
                className="input__job-seeker"
                // maxLength={13}
                value={inputValue}
                type="text"
                onChange={handleInputChange}
              />
              {/* </Form.Item> */}

              {/* {inputError ? <p>Raqam haqiqiyga o'xshamayapti!</p> : ""} */}
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
  );
};
export default JobSeekerModal;
