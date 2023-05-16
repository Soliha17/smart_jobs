import React from "react";

import "./basicInfoResume.css";
import { Button, Col, DatePicker, Input, Radio, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";

const BasicInfoResume = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="header__resume">
        <h3>Asosiy ma’lumotlar</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
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
      </div>
    </>
  );
};

export default BasicInfoResume;
