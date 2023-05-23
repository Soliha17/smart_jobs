import {
  Col,
  Input,
  Modal,
  Row,
  Form,
  DatePicker,
  Radio,
  Select,
  Checkbox,
} from "antd";

import "./modal.css";

import SmartJobLogo from "../../../assets/images/smart-logo.svg";
import LabeledInput from "../labeled-input/LabeledInput";
import BackIcon from "../../../assets/images/back-icon-modal.svg";

const InfoFills = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
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
          <h3>Ma’lumotlaringizni kiriting</h3>
          <p className="info__modal">
            Ro’yxatdan o’tish uchun quyidagilar talab
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
              <Row gutter={[24, 5]}>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Ismingizni kiriting*"
                    labelFor="nameOfInfo"
                    req={true}
                    input={<Input size="large" placeholder="Nodir" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Familiyaningizni kiriting*"
                    labelFor="surnameOfInfo"
                    req={true}
                    input={<Input size="large" placeholder="Karimov" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Tug’ilgan sana*"
                    labelFor="birthdayOfInfo"
                    req={true}
                    input={
                      <DatePicker
                        // onChange={onChange}
                        size="large"
                        picker="date"
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Jinsi*"
                    labelFor="genderOfInfo"
                    req={true}
                    input={
                      <Radio.Group
                        // onChange={onChange}
                        // defaultValue="male"
                        size="large"
                      >
                        <Radio.Button value="male">Erkak</Radio.Button>
                        <Radio.Button value="female">Ayol</Radio.Button>
                      </Radio.Group>
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Mamlakat"
                    labelFor="countryOfInfo"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        // onChange={onChange}
                        options={[
                          {
                            value: "uzbekistan",
                            label: "O'zbekiston",
                          },
                          {
                            value: "turkey",
                            label: "Turkiya",
                          },
                          {
                            value: "usa",
                            label: "AQSH",
                          },
                        ]}
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Shahar"
                    labelFor="cityOfInfo"
                    req={true}
                    input={
                      <Select
                        // defaultValue="buxoro"
                        placeholder="Tanlang"
                        size="large"
                        // onChange={onChange}
                        options={[
                          {
                            value: "buxoro",
                            label: "Buxoro",
                          },
                          {
                            value: "toshkent",
                            label: "Toshkent",
                          },
                          {
                            value: "istanbul",
                            label: "Istanbul",
                          },
                        ]}
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="E-mail"
                    labelFor="emailOfInfo"
                    req={true}
                    input={<Input size="large" type="email" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Parol o'ylab toping"
                    labelFor="parolOfInfo"
                    req={true}
                    input={<Input.Password size="large" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Parolni qayta kiriting"
                    labelFor="confirmParolOfInfo"
                    req={true}
                    input={<Input.Password size="large" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName=""
                    labelFor="agreementOfInfo"
                    valuePropName="checked"
                    input={
                      <Checkbox>
                        Davom etish orqali <a href="/">Universal shartnoma</a>{" "}
                        bilan tanishganimni va uni qabul qilganimni tasdiqlayman{" "}
                      </Checkbox>
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <button
                    type="submit"
                    className="primary-btn"
                    style={{ marginTop: "24px" }}
                  >
                    Ro'yxatdan o'tish
                  </button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default InfoFills;
