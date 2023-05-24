import React, { useState } from "react";

import "./basicInfoResume.css";
import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";

const BasicInfoResume = ({ props }) => {
  const [form] = Form.useForm();
  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, ""); // Remove non-digit characters

    if (digitsOnly.length <= 9) {
      setValue(digitsOnly);
    } else {
      setValue(0);
    }
  };

  const next = props.next;
  // console.log(next);

  const onFinish = (values) => {
    console.log("Success:", values);
    next(1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }} defaultValue={"998"}>
        <Option value="998">+998</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <>
      <div className="header__resume">
        <h3>Asosiy ma’lumotlar</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          validateMessages={validateMessages}
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
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Ism"
                labelFor="name"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Familiya"
                labelFor="surname"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Tug’ilgan sana"
                labelFor="birthday"
                req={true}
                input={
                  <DatePicker onChange={onChange} size="large" picker="date" />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Jins"
                labelFor="gender"
                req={true}
                input={
                  <Radio.Group
                    onChange={onChange}
                    // defaultValue="male"
                    size="large"
                  >
                    <Radio.Button value="male">Erkak</Radio.Button>
                    <Radio.Button value="female">Ayol</Radio.Button>
                  </Radio.Group>
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Mamlakat"
                labelFor="country"
                req={true}
                input={
                  <Select
                    // defaultValue="uzbekistan"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
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
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Shahar"
                labelFor="city"
                req={true}
                input={
                  <Select
                    // defaultValue="buxoro"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
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
                labelName="Fuqaroligi"
                labelFor="citizenship"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbek",
                        label: "O'zbek",
                      },
                      {
                        value: "rus",
                        label: "Rus",
                      },
                      {
                        value: "qozoq",
                        label: "Qozoq",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="O'zingizni tavsiflang"
                labelFor="desc"
                input={<TextArea rows={4} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                className={"phone-input"}
                labelName="Telefon raqamingiz"
                labelFor="number"
                req={true}
                input={
                  <Input
                    addonBefore={prefixSelector}
                    size="large"
                    type="number"
                    value={value}
                    onChange={(e) => {
                      e.target.value.length <= 10 && setValue(e.target.value);
                    }}
                    // maxLength={9} // Set the maximum length of the input value
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="E-mail"
                labelFor="email"
                req={true}
                input={<Input size="large" type="email" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Havolalar qo’shish"
                labelFor="links"
                input={
                  <Select
                    placeholder="Havola turini tanglang"
                    // defaultValue="link"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "link",
                        label: "Link",
                      },
                      {
                        value: "rasm",
                        label: "Rasm",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="&nbsp;"
                labelFor="link"
                input={<Input size="large" />}
              />
            </Col>
          </Row>
          <div className="footer__resume">
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              Davom etish
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BasicInfoResume;
