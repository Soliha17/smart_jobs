import {
  Col,
  Input,
  Row,
  Form,
  DatePicker,
  Radio,
  Select,
  Checkbox,
} from "antd";

import "./modal.css";

import LabeledInput from "../labeled-input/LabeledInput";
import BackIcon from "../../../assets/images/back-icon-modal.svg";

const InfoFills = ({ open, setOpen, next, prev }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
    next(3);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(2);
  }

  return (
    <div className="fill-infos-modal">
      <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      <h3 className="header__modal">Ma'lumotlaringizni kiriting</h3>
      <p className="info__modal">Ro'yxatdan o'tish uchun quyidagilar talab</p>
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
                    Davom etish orqali <a href="/">Universal shartnoma</a> bilan
                    tanishganimni va uni qabul qilganimni tasdiqlayman{" "}
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
  );
};
export default InfoFills;
