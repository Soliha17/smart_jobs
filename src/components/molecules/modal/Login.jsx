import { Col, Input, Row, Form } from "antd";

import "./modal.css";

import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import LabeledInput from "../labeled-input/LabeledInput";
import BackIcon from "../../../assets/images/back-icon-modal.svg";

const Login = ({ next, prev }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.parolOfLogin === "solya") {
      next(2);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(1);
  }

  return (
    <div className="signin-modal">
      <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      <h3 className="header__modal">Kirish</h3>
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
              <LabeledInput
                labelName="Parolingizni kiriting"
                labelFor="parolOfLogin"
                className={"parol-input__modal"}
                req={true}
                input={<Input.Password size="large" />}
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
  );
};
export default Login;
