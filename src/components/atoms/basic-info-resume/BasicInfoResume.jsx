import React, { useState } from "react";

import "./basicInfoResume.css";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { restrictedKeysInSignUpForm } from "src/assets/constants/inputConstants";

const BasicInfoResume = ({ props }) => {
  const [form] = Form.useForm();
  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  // const [value, setValue] = useState("");

  // const handleChange = (e) => {
  //   const inputValue = e.target.value;
  //   const digitsOnly = inputValue.replace(/\D/g, ""); // Remove non-digit characters

  //   if (digitsOnly.length <= 9) {
  //     setValue(digitsOnly);
  //   } else {
  //     setValue(0);
  //   }
  // };

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

  const handleKeyDown = (e) => {
    if (restrictedKeysInSignUpForm.includes(e.key)) {
      e.preventDefault();
    }
  };

  // const validateMessages = {
  //   required: "Iltimos, ${label}ni kiriting!",
  //   types: {
  //     email: "${label} is not a valid email!",
  //     number: "${label} is not a valid number!",
  //   },
  //   number: {
  //     range: "${label} must be between ${0} and ${10}",
  //   },
  // };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }} defaultValue={"998"}>
        <Option value="998">+998</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  const { t } = useTranslation();

  const [files, setFiles] = useState([]);
  const [selectedFileType, setSelectedFileType] = useState("");
  const [fileValue, setFileValue] = useState("");

  const handleAdd = (add) => {
    add();
    form.validateFields().then((values) => {
      const newFile = { type: selectedFileType, value: fileValue };
      setFiles([...files, newFile]);
      setSelectedFileType("");
      setFileValue("");
      form.resetFields(["fileType", "fileValue"]);
    });
  };

  const handleFileTypeChange = (value) => {
    setSelectedFileType(value);
  };

  const handleFileValueChange = (e) => {
    setFileValue(e.target.value);
  };

  return (
    <>
      <div className="header__resume">
        <h3>{t("basicInformation")}</h3>
        <p>{t("enterYourBasicInformation")}</p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          // validateMessages={validateMessages}
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
                labelName={t("name")}
                labelFor="name"
                req={true}
                input={<Input size="large" maxLength={32} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("surname")}
                labelFor="surname"
                req={true}
                input={<Input size="large" maxLength={32} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("birthday")}
                labelFor="birthday"
                req={true}
                input={
                  <DatePicker
                    onChange={onChange}
                    format={"DD/MM/YYYY"}
                    size="large"
                    picker="date"
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("gender")}
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
                labelName={t("country")}
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
                labelName={t("city")}
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
                labelName={t("citizenship")}
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
                labelName={t("describeYourself")}
                labelFor="desc"
                input={<TextArea rows={4} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                className={"phone-input"}
                labelName={t("phoneNumber")}
                labelFor="number"
                req={true}
                input={
                  <Input
                    addonBefore={prefixSelector}
                    size="large"
                    type="number"
                    // value={value}
                    onKeyDown={handleKeyDown}
                    maxLength={9}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("email")}
                labelFor="email"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            {/* start */}
            <Col xs={24}>
              <p className="language-label">{t("addLinks")}</p>

              <Form.List name="files" initialValue={files}>
                {(fields, { add, remove }) => (
                  <>
                    <Row gutter={[15, 12]} className="main-lan-row__resume">
                      <Col xs={24} sm={11}>
                        <Form.Item>
                          <Select
                            value={selectedFileType || undefined}
                            placeholder={t("chooseLinkOrImage")}
                            size="large"
                            onChange={handleFileTypeChange}
                            options={[
                              { value: "image", label: "Image" },
                              { value: "link", label: "Link" },
                            ]}
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={11} xs={24}>
                        <Form.Item>
                          <Input
                            value={fileValue}
                            placeholder={t("enterFileOrLink")}
                            size="large"
                            onChange={handleFileValueChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={2}>
                        <Form.Item>
                          <Button
                            className="action-btn__lan-resume"
                            size="large"
                            type="dashed"
                            onClick={() => handleAdd(add)}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              {t("add")}
                            </span>
                            <PlusOutlined />
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                    {fields.map((field, index) => (
                      <Row gutter={[15, 12]} key={field.key}>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "type"]}
                            fieldKey={[field.fieldKey, "type"]}
                          >
                            <Select
                              defaultValue={selectedFileType}
                              placeholder="Choose Link or Image"
                              size="large"
                              options={[
                                { value: "image", label: "Image" },
                                { value: "link", label: "Link" },
                              ]}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "value"]}
                            fieldKey={[field.fieldKey, "value"]}
                          >
                            <Input
                              defaultValue={fileValue}
                              placeholder="Enter File or Link"
                              size="large"
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          <Button
                            type="dashed"
                            size="large"
                            className="action-btn__lan-resume"
                            onClick={() => remove(field.name)}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              {t("turnOff")}
                            </span>
                            <DeleteOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))}
                  </>
                )}
              </Form.List>
            </Col>
            {/* end */}
          </Row>
          <div className="footer__resume">
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
              // onClick={handleAddFile}
            >
              {t("continue")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BasicInfoResume;
