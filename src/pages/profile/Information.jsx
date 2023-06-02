import React, { useState, useEffect } from "react";
import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";

import EyeIcon from "../../assets/images/eye-icon-profile.svg";
import VerifyIcon from "../../assets/images/verified-icon.svg";
import AvatarProfile from "../../assets/images/avatar-profile.svg";
import LabeledInput from "../../components/molecules/labeled-input/LabeledInput";

const Information = () => {
  const [form] = Form.useForm();

  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (
      e.key === "*" ||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "_" ||
      e.key === "(" ||
      e.key === ")" ||
      e.key === "&" ||
      e.key === "%" ||
      e.key === "$" ||
      e.key === "@" ||
      e.key === "!" ||
      e.key === "^" ||
      e.key === "~" ||
      e.key === "#" ||
      e.key === "." ||
      e.key === "," ||
      e.key === "Shift" ||
      e.key === " " ||
      e.key === "Alt"
    ) {
      e.preventDefault();
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    // next(1);
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
    <div className="info-profile container">
      <p className="title">Shaxsiy ma'lumotlar</p>
      <Row
        gutter={[40, 40]}
        justify={"space-between"}
        className="container__info-profile"
      >
        <Col xs={24} sm={12} xl={14} className="left__info-profile">
          <div className="avatar-card__info-profile">
            <img src={AvatarProfile} alt="AvatarProfile" />
          </div>
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
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  labelName="Ism"
                  labelFor="name"
                  req={true}
                  input={<Input size="large" maxLength={32} />}
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  labelName="Familiyasi"
                  labelFor="surname"
                  req={true}
                  input={<Input size="large" maxLength={32} />}
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  labelName="Tug'ilgan sana"
                  labelFor="birthday"
                  req={true}
                  input={
                    <DatePicker
                      onChange={onChange}
                      size="large"
                      picker="date"
                      format={"DD/MM/YYYY"}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  labelName="Jinsi"
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
              <Col xs={24} sm={24} md={12}>
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
              <Col xs={24} sm={24} md={12}>
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
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  className={"phone-input"}
                  labelName="Telefon raqamingiz"
                  labelFor="number"
                  req={true}
                  input={
                    <Input
                      addonBefore={prefixSelector}
                      size="large"
                      // type="number"
                      value={value}
                      onKeyDown={handleKeyDown}
                      maxLength={9}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <LabeledInput
                  labelName="E-mail"
                  labelFor="email"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
              <Col xs={24} sm={24} md={12}>
                <button type="submit" className="primary-btn">
                  Saqlash
                </button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xs={24} sm={24} md={12} xl={8}>
          <div className="right__info-profile info-card__profile">
            <h4>Umumiy statistikalar</h4>
            <div className="wrapper__info-profile">
              <div className="header__info-profile">
                <span>
                  <h6>0</h6>
                  <p>Ko'ruvlar</p>
                </span>
                <span>
                  <h6>0</h6>
                  <p>Arizalar</p>
                </span>
                <span>
                  <h6>0</h6>
                  <p>Vakansiyalar</p>
                </span>
              </div>
              <div className="content__info-card">
                <h5>Rezyumarlarim</h5>
                <div className="row__info-card">
                  <h6>Produc design</h6>
                  <div>
                    <span>
                      <img src={EyeIcon} alt="EyeIcon" />
                      <p>4</p>
                    </span>
                    <span>
                      <img src={VerifyIcon} alt="VerifyIcon" />
                      <p>4</p>
                    </span>
                  </div>
                </div>
                <div className="row__info-card">
                  <h6>Produc design</h6>
                  <div>
                    <span>
                      <img src={EyeIcon} alt="EyeIcon" />
                      <p>4</p>
                    </span>
                    <span>
                      <img src={VerifyIcon} alt="VerifyIcon" />
                      <p>4</p>
                    </span>
                  </div>
                </div>
              </div>
              <button className="primary-btn">Rezyumelarim</button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Information;
