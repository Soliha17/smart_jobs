import { Col, Row, Form } from "antd";

import BackIcon from "../../../assets/images/back-icon-modal.svg";
import OTPInput from "../../atoms/OTPInput";

import "./modal.css";

const SignUp = ({ next, prev }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="body__login-modal">
      <img src={BackIcon} alt="BackIcon" />
      <h3 className="header__modal">Tekshirish kodi</h3>
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
  );
};
export default SignUp;
