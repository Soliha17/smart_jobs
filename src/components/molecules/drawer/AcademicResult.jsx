import { Button, Col, Drawer, Form, Input, Row, Space, Upload } from "antd";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";
import UploadIcon from "../../../assets/images/upload-icon.svg";

const AcademicResultDrawer = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);

    // next(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "Iltimos, ${label}ni kiriting!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${0} and ${10}",
    },
  };

  return (
    <>
      <Drawer
        title="Akademik natijalar"
        size="large"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <img src={CloseIcon} onClick={onClose} alt="CloseIcon" />
          </Space>
        }
      >
        <div className="content__drawer">
          <Form
            form={form}
            layout="vertical"
            validateMessages={validateMessages}
            name="basic"
            initialValues={
              {
                // remember: true,
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
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Test nomi"
                  labelFor="testName"
                  req={true}
                  input={<Input size="large" placeholder="Masalan, SAT" />}
                />
              </Col>
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Toplangan bal"
                  labelFor="facultyName"
                  req={true}
                  input={
                    <Input size="large" type="number" placeholder="1580" />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Ushbu natijani bergan tashkilot"
                  labelFor="organization"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Tasdiqlovchi hujjat"
                  labelFor="document"
                  req={true}
                  input={
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button
                        icon={<img src={UploadIcon} alt="" />}
                        size="large"
                      >
                        Hujjatni yuklash (ihtiyoriy)
                      </Button>
                    </Upload>
                  }
                />
              </Col>
            </Row>
            <button
              type="submit"
              style={{ marginTop: "32px" }}
              className="primary-btn"
            >
              Saqlash
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};
export default AcademicResultDrawer;
