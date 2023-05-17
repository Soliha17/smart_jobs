import React, { useState } from "react";

import "./basicInfoResume.css";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";
import BuildResume from "../../../pages/build-resume/BuildResume";

const BasicInfoResume = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // const validateMessages = {
  //   required: `${labelName} is required!`,
  //   types: {
  //     email: `${labelName} is not a valid email!`,
  //     number: `${labelName} is not a valid number!`,
  //   },
  //   number: {
  //     range: `${labelName} must be between ${0} and ${10}`,
  //   },
  // };

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
          // validateMessages={validateMessages}
          name="basic"
          initialValues={{
            remember: true,
            requiredMarkValue: requiredMark,
          }}
          onFinish={onFinish}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 34]}>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Ism"
                labelFor="name"
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Familiyasi"
                labelFor="surname"
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Tug’ilgan sana"
                labelFor="birthday"
                input={
                  <DatePicker onChange={onChange} size="large" picker="date" />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Jinsi"
                labelFor="gender"
                input={
                  <Radio.Group
                    onChange={onChange}
                    defaultValue="male"
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
                input={
                  <Select
                    defaultValue="uzbekistan"
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
                input={
                  <Select
                    defaultValue="buxoro"
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
                    defaultValue="uzbek"
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
                labelName="O’zingizni tavsiflang"
                labelFor="desc"
                input={<TextArea rows={4} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Telefon raqamingiz"
                labelFor="number"
                input={<Input size="large" type="number" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="E-mail"
                labelFor="email"
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
                    defaultValue="link"
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
        </Form>
      </div>
    </>
  );
};

export default BasicInfoResume;
